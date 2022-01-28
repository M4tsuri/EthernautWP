// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract External {
    function get_uint256() virtual external view returns (uint256);
}

contract Call {
    External ext;

    function callee() private view returns (uint256) {
        uint256 number = ext.get_uint256();
        number = number - 114514;
        return number;
    }

    function caller() public view returns (uint256) {
        uint256 number = callee();
        return number;
    }
}
