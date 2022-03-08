//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.3;
contract Token {
    
    string public name = "PARTH PATEL TOKEN";
    string public symbol = "PPT";

    uint256 public totalSupply = 1000000;

    address public owner;

    mapping(address => uint256) balances;

    
    constructor() {
        
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

   
    function transfer(address to, uint256 amount) external {
       
        require(balances[msg.sender] >= amount, "Not enough tokens");

        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

   
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}