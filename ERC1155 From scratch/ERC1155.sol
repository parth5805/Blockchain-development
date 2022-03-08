// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract ERC1155 {

        string public uri;
        mapping(uint=>mapping(address=>uint)) public balances;
        mapping(address=>mapping(address=>bool)) public approvals;
    
    event TransferSingle(address indexed _operator, address indexed _from, address indexed _to, uint256 _id, uint256 _value);
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
    event URI(string _value, uint256 indexed _id);
        constructor (string memory _uri)
        {
            uri=_uri;
        }

    function balanceOf(address _owner, uint256 _id) public  view returns (uint256)
    {
    require(_owner!=address(0),"Owner address is invalid");
    return balances[_id][_owner];
    }

    function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data) public{
    require(_from==msg.sender || approvals[_from][msg.sender]==true,"caller is not owner nor approved account");
    require(_to!=address(0),"_to address is invalid");
    require(balances[_id][_from] >=_value,"insufficient funds");
    balances[_id][_from] -=_value;
    balances[_id][_to] +=_value;
    emit TransferSingle(msg.sender,_from,_to,_id,_value);

    }

    function setApprovalForAll(address _operator, bool _approved) public{
    require(_operator!=address(0),"Operator address is invalid");
    approvals[msg.sender][_operator]=_approved;
    emit ApprovalForAll(msg.sender,_operator,_approved);
    }

    function isApprovedForAll(address _owner, address _operator) public view returns (bool){
    require(_owner!=address(0),"Owner address is invalid");
    require(_operator!=address(0),"Operator address is invalid");
    return approvals[_owner][_operator];
    }

    function mint(uint _id,uint _amount,bytes memory data) public {
    //for minting _from account must be address(0)
    address from=address(0);
    address to=msg.sender;
    balances[_id][to] +=_amount;
    emit TransferSingle(msg.sender,from,to,_id,_amount);
    }
    
}