# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

To deploy the contract on testnet from hardhat use:

```
yarn hardhat run scripts/deploy.js --network sepolia
```

Here we have define the task to get the current blockNumber. To run that, we use:

```
yarn hardhat block-number --network sepolia
```

In this case, We'll get sepolia current block Number.

If we need to run some script on the hardhat, we can do it by : `yarn hardhat run scripts/deploy.js --network localhost`
