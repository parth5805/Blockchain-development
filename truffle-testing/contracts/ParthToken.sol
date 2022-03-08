// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.5.0 <0.9.0;

contract ParthToken{
        string public name="Parth Token";
        string public symbol="PARTH";
        string public standard="PARTH v1.0";
        uint public totalSupply;
        
        mapping(address=>uint) public balanceOf;

        constructor (uint _totalSupply)
        {
            balanceOf[msg.sender]=_totalSupply;
            totalSupply=_totalSupply;
        }
}