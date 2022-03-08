// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract demo {
  uint public number;

  function  set(uint _number) public {
      number=_number;
  }
  function get() public view returns(uint)
  {
      return number;
  }

}
