// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Transactions {
    event Transfer (address sender, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    function publishTransaction(address payable receiver, uint amount, string memory message, string memory keyword) public {
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword); 
    }
    string public name = "My Hardhat Token";
    string public symbol = "MHT";

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