// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers, run, network} = require("hardhat");  // run allows us to run any hardhat task.

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory(
    "SimpleStorage"  // contract name
  );

  console.log("Deploying contract...");

  const simpleStorage = await SimpleStorageFactory.deploy();
  // await simpleStorage.deployed();

  console.log(`Deploying Address to ${simpleStorage.target}`); // target fetch the contract address.

  if(network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deploymentTransaction().wait(6); // we are waiting so that the transaction get reflect on ethscan.
    await verify(simpleStorage.target, []);
    console.log(`contract verified!`);
  }

  // Interact with the contract
  const currentValue = await simpleStorage.retrieve();
  console.log(`current value is: ${currentValue}`);

  // Update the current value

  const transactionResponse = await  simpleStorage.store(7);
  await transactionResponse.wait(1);

  const updatedValue = await simpleStorage.retrieve();
  console.log(`Updated Value is: ${updatedValue}`);
}

async function verify(constractAddress, args) {
  console.log("Verifying contract....");
   
  try {
    await run("verify:verify", {
      address: constractAddress,
      constructorArguments: args,
     })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verfied")) {
      console.log("Already Verified!");
    }
    else {
      console.log(e);
    }
  }
  
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
