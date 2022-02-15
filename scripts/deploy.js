const { ethers, upgrades } = require("hardhat")

async function main() {
  const BridgeContract = await ethers.getContractFactory("BridgeContract")
  const bridgeContract = await upgrades.deployProxy(BridgeContract, ["0xc8f0b3709B0E53104446ACcC582fDf66cF740436", "0xc8f0b3709B0E53104446ACcC582fDf66cF740436"])
  await bridgeContract.deployed()
  console.log("BridgeContract deployed to:", bridgeContract.address)

  // const ERC20 = await ethers.getContractFactory('TestERC20')
  // erc20 = await ERC20.deploy()
  // await erc20.deployed()
  // console.log("ERC20 deployed to:", erc20.address)
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error)
    process.exit(1)
})