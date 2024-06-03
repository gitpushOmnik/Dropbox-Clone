import React, { Component } from 'react';

/**
 * @class Main
 * @extends {Component}
 * @description Component to handle file upload for storage
 */
class Main extends Component {
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
              <div className="card mb-3 mx-auto bg-light shadow-sm" style={{ maxWidth: '512px' }}>
                <h2 className="text-dark text-monospace bg-light p-3"><b>Upload File for Storage</b></h2>
                <form onSubmit={(event) => {
                  event.preventDefault();
                  const description = this.fileDescription.value;
                  this.props.uploadFile(description);
                }} >
                  <input type="file" onChange={this.props.captureFile} className="text-dark text-monospace" />
                  <div className="form-group">
                    <br />
                    <input
                      id="fileDescription"
                      type="text"
                      ref={(input) => { this.fileDescription = input }}
                      className="form-control text-monospace"
                      placeholder="Summary of the file"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mt-3"><b>Upload</b></button>
                </form>
              </div>
              <p>&nbsp;</p>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
