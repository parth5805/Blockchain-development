const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile.js");
const provider = new HDWalletProvider("arctic current exact remind hen lunch industry install conduct cluster jazz below","https://goerli.infura.io/v3/eb44541a1e3d4795a4a9b71f5c84e266");
const web3 = new Web3(provider);

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
  
        await  demoContract.methods.setstr("parth").send({from: defaultAccount});
        
        demoContract.methods.x().call((err, data1) => {
          console.log("new Value:", data1);
        });
  
        demoContract.methods.name().call((err, data1) => {
          console.log("name:", data1);
        });
    });

    });

