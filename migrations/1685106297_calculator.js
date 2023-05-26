const Calculator = artifacts.require("Calculator");
module.exports = function(_deployer) {
  _deployer.deploy(Calculator);
};
