const DropboxStorage = artifacts.require("DropboxStorage");

module.exports = function(deployer) {
  deployer.deploy(DropboxStorage);
};
