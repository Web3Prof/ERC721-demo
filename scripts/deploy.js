const { ethers } = require("hardhat");

async function main() {
    const factory = await ethers.getContractFactory('Pots');
    const nft = await factory.deploy();
    const nftAddress = await nft.getAddress();
    console.log("Address: ", nftAddress);
}

main();