pragma solidity ^0.4.26; 
import "remix_tests.sol"; // this import is automatically injected by Remix.
import "./Election.sol";

contract ElectionTest {
   
    uint deadline; //please use unix time format
    bytes32 role; //please convert string to byte32

   
    RepElection electionToTest;
    function checkCreation() public{
        deadline = now + 1 days;
        role = bytes32("Captain");
        electionToTest = new RepElection(deadline,role);
        electionToTest.addMember(bytes32("Enna"),this);
        Assert.equal(electionToTest.getMemberList()[0], bytes32(bytes32("Enna")),"Enna should be in the Member List at index 0");
    }
    
    function checkStatus () public {
        Assert.equal(electionToTest.access(this), bool(true),"Enna should have access to this Election");
        Assert.equal(electionToTest.getName(), bytes32("Enna"),"Enna should be the name of member with ID 0");
    }
    
    function checkVoting () public {
        electionToTest.vote(0);
        Assert.equal(electionToTest.getVote(), uint(0), "Enna should have voted for member with ID 0");
        Assert.equal(electionToTest.getResults()[0], uint(1),"Enna should have access to this Election");
    }
    
}