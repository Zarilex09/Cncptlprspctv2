// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { ERC1155 } from "lib/solmate/src/tokens/ERC1155.sol";
import { Owned } from "lib/solmate/src/auth/Owned.sol";

contract Main1155 is ERC1155, Owned {

    string public name;
    string public symbol;

    mapping(uint256 => string) public uriMapping;

    // structs
    struct mintDetails {
        uint64 price;
        uint32 startTime;
        uint32 endTime;
        uint8 gen;
    }

    struct burnToMintDetails {
        uint64 price;
        uint8 burnGen;
        uint8 numToBurn;
        uint8 mintGen;
        uint8 numToMint;
    }

    // burn and price mappings
    mapping(uint256 => mintDetails) public mintMapping;
    mapping(uint256 => burnToMintDetails) public burnToMintMapping;

    constructor(
        string memory _name,
        string memory _symbol
    ) Owned(msg.sender) public {
        name = _name;
        symbol = _symbol;
    }

    /********************
    * Public methods
    *********************/

    function openMint(
        uint256 quantity,
        uint256 detailsIndex
    ) external payable {
        mintDetails memory details = mintMapping[detailsIndex];
        require(details.gen != uint8(0), "invalid mint");
        require(msg.value * 1 ether >= uint256(details.price) * quantity, "not enough value");
        require(block.timestamp > uint256(details.startTime) && block.timestamp < uint256(details.endTime), "invalid time");

        _mint(
            msg.sender,
            quantity,
            details.gen,
            ""
        );
    }

    function burnToMint(
        uint256 index
    ) external payable {
        burnToMintDetails memory details = burnToMintMapping[index];
        require(msg.value * 1 ether >= uint256(details.price), "not enough value");
        
        // require checks are implicit in burn
        _burn(
            msg.sender, 
            details.burnGen, 
            details.numToBurn
        );

        _mint(
            msg.sender,
            details.numToMint,
            details.mintGen,
            ""
        );
    }

    function uri(
        uint256 id
    ) public view override returns (string memory) {
        return uriMapping[id];
    }


    /********************
    * Owner methods
    *********************/
    function setURI(
        uint256 id,
        string memory uri
    ) external onlyOwner {
        uriMapping[id] = uri;
    }

    function setMintDetails(
        uint256 index,
        uint64 price,
        uint32 startTime,
        uint32 endTime,
        uint8 gen
    ) external onlyOwner {
        mintMapping[index] = mintDetails(price, startTime, endTime, gen);
    }

    function setBurnDetails(
        uint256 index,
        uint64 price,
        uint8 burnGen,
        uint8 numToBurn,
        uint8 mintGen,
        uint8 numToMint 
    ) external onlyOwner {
        burnToMintMapping[index] = burnToMintDetails(price, burnGen, numToBurn, mintGen, numToMint);
    }

    function withdraw() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}
