/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//  require("@nomiclabs/hardhat-ganache");

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.7.3",

  networks: {
    hardhat: {
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545"
   }
  },
};
