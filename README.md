# Decentralized Dropbox Clone

This is a decentralized application (DApp) that replicates the functionality of a dropbox-like file storage system on the Ethereum blockchain. Users can upload files to the Ethereum network, and the file data is stored on the InterPlanetary File System (IPFS). The application is built using React for the front-end interface and Solidity for the smart contract.

## Project Overview

The Decentralized Dropbox Clone allows users to upload files to the Ethereum blockchain and IPFS. The application provides a user-friendly interface for file uploads and displays a table of all the uploaded files, along with their details such as file name, description, type, size, upload date, uploader address, and IPFS hash.

## Libraries and Tools Used

- **React.js**: A JavaScript library for building user interfaces.
- **Web3.js**: A library for interacting with Ethereum nodes and smart contracts.
- **Truffle**: A development environment, testing framework, and asset pipeline for Ethereum.
- **Solidity**: The programming language for writing smart contracts on Ethereum.
- **IPFS (InterPlanetary File System)**: A peer-to-peer distributed file system for storing files.
- **Infura**: A hosted Ethereum node cluster that allows easy access to the Ethereum network.
- **MetaMask**: A browser extension that serves as an Ethereum wallet and allows users to interact with DApps.

## Project Functionalities

### File Upload

Users can select a file from their local machine and provide a description for the file. Upon clicking the "Upload" button, the file is uploaded to IPFS, and the file hash, size, type, name, and description are stored on the Ethereum blockchain using the deployed smart contract.

### File Listing

The application displays a table with all the uploaded files and their details, including file ID, name, description, type, size, upload date, uploader address, and IPFS hash. The uploader address is linked to the corresponding Etherscan page, and the IPFS hash is linked to the file on the IPFS gateway.

## Deployment and Testing

1. **Testing Smart Contracts**

   > truffle test

2. **Deploy Smart Contracts to Ganache**:

   > truffle migrate

3. **Running Frontend Server**:

   > npm run start


## Screenshots of the website

<img src="https://github.com/gitpushOmnik/Dropbox-Clone/blob/main/README/contract-testing.png" width="1250" height="500"> 
<img src="https://github.com/gitpushOmnik/Dropbox-Clone/blob/main/README/homepage.png" width="1250" height="500"> 
<img src="https://github.com/gitpushOmnik/Dropbox-Clone/blob/main/README/file-upload.png" width="1250" height="500"> 
<img src="https://github.com/gitpushOmnik/Dropbox-Clone/blob/main/README/files.png" width="1250" height="500"> 
<img src="https://github.com/gitpushOmnik/Dropbox-Clone/blob/main/README/saved-files.png" width="1250" height="300"> 


## Additional Information

- The application uses the `web3.js` library to interact with the Ethereum network and deployed smart contract.
- The IPFS library is used to upload files to the IPFS network and retrieve their hashes.
- The Infura API is utilized to connect to the Ethereum network without running a full node.
- MetaMask is required to be installed and enabled in the user's browser to interact with the DApp and sign transactions.
- The smart contract, `DropboxStorage.sol`, handles the storage and retrieval of file information on the Ethereum blockchain.
- The React components (`App.js`, `Main.js`, `Files.js`, and `Navbar.js`) provide the user interface and handle the application logic.
