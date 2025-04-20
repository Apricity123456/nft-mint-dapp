// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;

    constructor(
        address initialOwner
    ) ERC721("MyNFT", "MNFT") Ownable(initialOwner) {}

    event NFTMinted(address to, uint256 tokenId, string tokenURI);

    function mintNFT(
        address recipient,
        string memory tokenURI
    ) public onlyOwner {
        _tokenIds += 1;
        uint256 newItemId = _tokenIds;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        emit NFTMinted(recipient, newItemId, tokenURI);
    }

    function getLatestTokenId() public view returns (uint256) {
        return _tokenIds;
    }
}
