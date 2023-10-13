// we'll use mocha for testing
const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", function () {
    let SimpleStorageFactory;
    let simpleStorage;
    beforeEach(async function () {
        // things that needs to be perform before every test..
        // we need to deploy the contract before performing any test.

        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

        simpleStorage = await SimpleStorageFactory.deploy();
    });

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve();
        const expectedValue = "0";

        assert.equal(currentValue.toString(), expectedValue);
    });
});
