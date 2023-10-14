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

If we need to run some script on the hardhat local host, we can do it by : `yarn hardhat run scripts/deploy.js --network localhost`

To clear the cache, run this command: `yarn hardhat clean`

To run the test, run this command:
`yarn hardhat test`

To run the specific test, you can provide the keyword that should be uniue.
`yarn hardhat test --grep KEYWORD`

Add `hardhat gas reporter` to get the exact amount of gas each function is using. To add this run this command:
`yarn add hardhat-gas-reporter --dev`

To check if we have missed any line for testing, we use `solidity coverage`.

Install Solidity coverage by : `yarn add --dev solidity-coverage`
