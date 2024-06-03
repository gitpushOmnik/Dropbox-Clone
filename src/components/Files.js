import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment';

/**
 * @class Files
 * @extends {Component}
 * @description Component to display stored files in a table format
 */
class Files extends Component {
  /**
   * @description Renders the component
   * @returns {JSX.Element} The component's rendered elements
   */
  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <h2 className="text-dark text-monospace bg-light p-3">
                <b><ins>Stored Files</ins></b>
              </h2>
              <p>&nbsp;</p>
              <table className="table table-bordered text-monospace" style={{ width: '100%', maxHeight: '450px' }}>
                <thead style={{ fontSize: '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Type</th>
                    <th scope="col">Size</th>
                    <th scope="col">Date</th>
                    <th scope="col">Uploader</th>
                    <th scope="col">Hash</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.files.map((file, key) => (
                    <tr key={key}>
                      <td>{file.fileId}</td>
                      <td>{file.fileName}</td>
                      <td>{file.fileDescription}</td>
                      <td>{file.fileType}</td>
                      <td>{convertBytes(file.fileSize)}</td>
                      <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                      <td>
                        <a
                          href={"https://etherscan.io/address/" + file.uploader}
                          rel="noopener noreferrer"
                          target="_blank">
                          {file.uploader.substring(0, 6)}...{file.uploader.substring(38, 42)}
                        </a>
                      </td>
                      <td>
                        <a
                          href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                          rel="noopener noreferrer"
                          target="_blank">
                          {file.fileHash.substring(0, 10)}...
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Files;
