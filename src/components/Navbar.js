import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../box.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 text-monospace">
        <a
          className="navbar-brand d-flex align-items-center"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={box} width="30" height="30" className="align-top mr-2" alt="" />
          <b>Dropbox Clone</b>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/files" className="nav-link">Files</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="d-flex align-items-center">
                <small id="account" className="text-secondary mr-2">
                  {this.props.account.substring(0, 6)}...{this.props.account.substring(38, 42)}
                </small>
                {this.props.account ? (
                  <img
                    className="ml-2"
                    width="30"
                    height="30"
                    src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                    alt=""
                    style={{ padding: '2px', backgroundColor: 'white', borderRadius: '50%' }}
                  />
                ) : (
                  <span></span>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
