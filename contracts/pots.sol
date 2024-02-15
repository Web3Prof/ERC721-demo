// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract Pots is ERC721Enumerable {
    uint256 public constant MAX_SUPPLY = 10; // set max supply of the NFT

    constructor() ERC721("SePots", "POTS") {}

    // set base URI to IPFS folder of metadata
    function _baseURI() internal pure override returns (string memory) {
        return
            "https://bafybeiaul4fgnopenv3pwegicktesgxre77vqaq74u4pdguyyuctkfbf5u.ipfs.nftstorage.link/";
    }

    function mint() external {
        // should add restriction for real project, such as amount of token required to pay or onlyOwner can initial mint
        require(totalSupply() < MAX_SUPPLY); // validate supply
        _safeMint(msg.sender, totalSupply() + 1); // safeMint ensures receiver can receive NFT
    }
}
