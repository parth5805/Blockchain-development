solc = require("solc");
fs = require("fs");
Web3 = require("web3");
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
fileContent = fs.readFileSync("demo.sol").toString();
console.log(fileContent);

var input = {
    language: "Solidity",
    sources: {
      "demo.sol": {
        content: fileContent,
      },
    },
  
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
  
  var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log("Output: ", output);
ABI = output.contracts["demo.sol"]["demo"].abi;
bytecode = output.contracts["demo.sol"]["demo"].evm.bytecode.object;
console.log("Bytecode: ", bytecode);
console.log("ABI: ", ABI);

contract = new web3.eth.Contract(ABI);
let defaultAccount;
web3.eth.getAccounts().then((accounts) => {
  console.log("Accounts:", accounts); //it will show all the ganache accounts

  defaultAccount = accounts[0];
  console.log("Default Account:", defaultAccount);  //to deploy the contract from default Account
  contract
    .deploy({ data: bytecode })
    .send({ from: defaultAccount, gas: 470000 })
    .on("receipt", (receipt) => { //event,transactions,contract address will be returned by blockchain
      console.log("Contract Address:", receipt.contractAddress);
    })
    .then( async (demoContract) => {
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
