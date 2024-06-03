pragma solidity ^0.5.0;

/**
 * @title DropboxStorage
 * @dev A decentralized storage system for uploading and managing files.
 */
contract DropboxStorage {
    string public name = 'DropboxStorage';
    uint public fileCount = 0;
    mapping(uint => File) public files;

    struct File {
        uint fileId;
        string fileHash;
        uint fileSize;
        string fileType;
        string fileName;
        string fileDescription;
        uint uploadTime;
        address payable uploader;
    }

    event FileUploaded(
        uint fileId,
        string fileHash,
        uint fileSize,
        string fileType,
        string fileName,
        string fileDescription,
        uint uploadTime,
        address payable uploader
    );

    constructor() public {
    }

    /**
     * @dev Uploads a file to the contract.
     * @param _fileHash The IPFS hash of the file.
     * @param _fileSize The size of the file.
     * @param _fileType The type of the file.
     * @param _fileName The name of the file.
     * @param _fileDescription The description of the file.
     */
    function uploadFile(
        string memory _fileHash, 
        uint _fileSize, 
        string memory _fileType, 
        string memory _fileName, 
        string memory _fileDescription
    ) 
        public 
    {
        // Make sure the file hash exists
        require(bytes(_fileHash).length > 0, "File hash must be provided.");
        // Make sure file type exists
        require(bytes(_fileType).length > 0, "File type must be provided.");
        // Make sure file description exists
        require(bytes(_fileDescription).length > 0, "File description must be provided.");
        // Make sure file fileName exists
        require(bytes(_fileName).length > 0, "File name must be provided.");
        // Make sure uploader address exists
        require(msg.sender != address(0), "Uploader address must be valid.");
        // Make sure file size is more than 0
        require(_fileSize > 0, "File size must be greater than zero.");

        // Increment file id
        fileCount++;

        // Add File to the contract
        files[fileCount] = File(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, now, msg.sender);

        // Trigger an event
        emit FileUploaded(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, now, msg.sender);
    }
}
