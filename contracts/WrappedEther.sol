// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WrappedEther is ERC20 {
    address public admin;

    constructor() ERC20("Wrapped Ether", "WETH") {}

    function mintWeth() external payable {
        _mint(msg.sender, msg.value);
    }

    function retrieveEther(uint256 _amount) external {
        _burn(msg.sender, _amount);
        payable(msg.sender).transfer(_amount);
    }
}
