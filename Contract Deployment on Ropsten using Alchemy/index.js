const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://eth-goerli.alchemyapi.io/v2/B2mbuVdoOMQX2q2Ih3KgNYfI5-iUEu2s"))

web3.eth.getBalance("0x0eb932156Ab19d418Be08e8af3ab4fF3B39da1A2", function(err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(web3.utils.fromWei(result, "ether") + " ETH")
  }
})