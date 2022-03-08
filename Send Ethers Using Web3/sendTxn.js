async function main() {
    require('dotenv').config();
    const { API_URL, PRIVATE_KEY } = process.env;
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(API_URL);
    const myAddress = '0x0eb932156Ab19d418Be08e8af3ab4fF3B39da1A2' //ropsten public address
   
    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest');

    const transaction = {
     'to': '0x48eEC1E92E3BCeE8448AC06a78c485E7cE8248aC', // user1 address to return eth
     'value': 100000000000000000, //0.1 ether
     'gas': 30000,
     'nonce': nonce,
    };
   
    const signedTx = await web3.eth.accounts.signTransaction(transaction,PRIVATE_KEY);
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("Transcation Hash:- "+hash);
    } else {
      console.log("Something went wrong while submitting your transaction:", error)
    }
   });
}

main();