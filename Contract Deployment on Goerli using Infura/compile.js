const path = require("path");
const fs = require("fs");
const solc = require("solc");
const examplePath = path.resolve(__dirname, "contracts", "demo.sol");
fileContent = fs.readFileSync("demo.sol").toString();

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
 
  const interface = output.contracts["demo.sol"]["demo"].abi;
 const bytecode = output.contracts["demo.sol"]["demo"].evm.bytecode.object;
//   console.log("Bytecode: ", bytecode);
//   console.log("ABI: ", interface);
module.exports  = { interface, bytecode };
