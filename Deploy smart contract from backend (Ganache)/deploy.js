const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile.js");
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
contract = new web3.eth.Contract(interface);
let defaultAccount;
web3.eth.getAccounts().then((accounts) => {
  console.log("Accounts:", accounts); 
  defaultAccount = accounts[0];
  console.log("Default Account:", defaultAccount);  
  contract
    .deploy({ data: bytecode })
    .send({ from: defaultAccount, gas: 470000 })
    .on("receipt", (receipt) => { 
      console.log("Contract Address:", receipt.contractAddress);
    }).then( async (demoContract) => {
        demoContract.methods.x().call((err, data) => {
          console.log("Initial Value:", data);
        });
  
        await demoContract.methods.setval(555).send({from: defaultAccount});        
        demoContract.methods.x().call((err, data1) => {
          console.log("new Value:", data1);
        });
    });

    });