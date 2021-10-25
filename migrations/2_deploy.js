const WrappedEther = artifacts.require("WrappedEther");

module.exports = async (deployer) => {
  await deployer.deploy(WrappedEther);
  const wrappedEther = await WrappedEther.deployed();
  console.log(wrappedEther);
};
