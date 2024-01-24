const CLPT = artifacts.require('CLPTImplementation');
const Proxy = artifacts.require('AdminUpgradeabilityProxy');

module.exports = async function(deployer) {
  await deployer;

  await deployer.deploy(CLPT);
  const proxy = await deployer.deploy(Proxy, CLPT.address);
  const proxiedCLPT = await CLPT.at(proxy.address);
  await proxy.changeAdmin("0x5Dbf71b723A97fa1c74eF741F63D63C5ABe4E86e");
  await proxiedCLPT.initialize();
};
