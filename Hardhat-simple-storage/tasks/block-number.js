const {task} = require("hardhat/config");



task("block-number", "Prints the current block number").setAction (
    async (taaskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(`current block number: ${blockNumber}`);

    }
)