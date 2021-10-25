const WrappedEther = artifacts.require("WrappedEther");

module.exports = async () => {
  try {
    const wrappedEther = await WrappedEther.deployed();
    const [account, _] = await web3.eth.getAccounts();
    const value = await web3.utils.toWei("1");
    let wrappedBalance = await wrappedEther.balanceOf(account);
    let ethBalance = await web3.eth.getBalance(account);
    console.log(`balance ETH before: ${ethBalance}`);
    console.log(`balance weth before: ${wrappedBalance}`);
    await wrappedEther.mintWeth({ from: account, value: value });
    console.log(`balance after: ${wrappedBalance}`);

    console.log("----");
    console.log("now getting Eth back");
    console.log(`balance weth after: ${wrappedBalance}`);
    await wrappedEther.retrieveEther(value);
    wrappedBalance = await wrappedEther.balanceOf(account);
    ethBalance = await web3.eth.getBalance(account);
  } catch (error) {
    console.log(error);
  }
};
