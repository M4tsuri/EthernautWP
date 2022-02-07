// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Attack {
    function whatIsTheMeaningOfLife() public pure returns (uint8) {
        return 42;
    }
}

contract Verify {
  function verify(Attack a) public pure returns (bool) {
    return a.whatIsTheMeaningOfLife() == 42;
  }
}

contract MagicNum {

  address public solver;

  constructor() {}

  function setSolver(address _solver) public {
    solver = _solver;
  }

  /*
    ____________/\\\_______/\\\\\\\\\_____        
     __________/\\\\\_____/\\\///////\\\___       
      ________/\\\/\\\____\///______\//\\\__      
       ______/\\\/\/\\\______________/\\\/___     
        ____/\\\/__\/\\\___________/\\\//_____    
         __/\\\\\\\\\\\\\\\\_____/\\\//________   
          _\///////////\\\//____/\\\/___________  
           ___________\/\\\_____/\\\\\\\\\\\\\\\_ 
            ___________\///_____\///////////////__
  */
}