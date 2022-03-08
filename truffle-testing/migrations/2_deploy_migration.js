const ParthToken = artifacts.require("ParthToken");

module.exports = function (deployer) {
    const tot_supply = 1000;
  deployer.deploy(ParthToken,tot_supply);
};
