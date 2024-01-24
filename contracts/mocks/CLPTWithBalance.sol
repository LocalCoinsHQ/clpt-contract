pragma solidity ^0.4.24;

import "../CLPTImplementation.sol";


contract CLPTWithBalance is CLPTImplementation {
    function initializeBalance(address initialAccount, uint initialBalance) public {
        balances[initialAccount] = initialBalance;
        totalSupply_ = initialBalance;
    }
}
