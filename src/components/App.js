import React, { Component } from 'react';
import DropboxStorage from '../abis/DropboxStorage.json';
import Web3 from 'web3';
import Navbar from './Navbar';
import Main from './Main';
import Files from './Files';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { Buffer } from 'buffer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const projectId = "e494c2a6d5db46bb8b5c95aca98e49d5";
const projectSecret = "8N9igPKM59uTbcg3qfLTLZBhKZuJIG58dIbfxnZ0Sxk5D36Vu4RiBw";
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const ipfs = ipfsHttpClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
});

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = DropboxStorage.networks[networkId];
    if (networkData) {
      const dstorage = new web3.eth.Contract(DropboxStorage.abi, networkData.address);
      this.setState({ dstorage });
      const filesCount = await dstorage.methods.fileCount().call();
      this.setState({ filesCount });
      for (var i = filesCount; i >= 1; i--) {
        const file = await dstorage.methods.files(i).call();
        this.setState({
          files: [...this.state.files, file]
        });
      }
    } else {
      window.alert('DropboxStorage contract not deployed to detected network.');
    }
  }

  captureFile = event => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log('buffer', this.state.buffer);
    }
  }

  uploadFile = description => {
    console.log("Submitting file to IPFS...");
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('IPFS result', result);
      if (error) {
        console.error(error);
        return;
      }
      this.setState({ loading: true });
      this.state.dstorage.methods.uploadFile(result[0].hash, result[0].size, result[0].type, result[0].name, description).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false });
      });
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      dstorage: null,
      files: [],
      loading: false
    }

    this.uploadFile = this.uploadFile.bind(this);
    this.captureFile = this.captureFile.bind(this);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar account={this.state.account} />
          <Routes>
            <Route path="/" element={<Main captureFile={this.captureFile} uploadFile={this.uploadFile} />} />
            <Route path="/files" element={<Files files={this.state.files} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
