pragma solidity ^0.4.26;

/*  RULES:
    1.	Only members added by administrator can vote.
    2.	Every member is himself/herself a candidate.
    3.	Every member’s vote will count and count for once only.
    4.	Nobody should know who other members vote for.
    5.	The election result will be published if
    a.	everyone has voted or
    b.	deadline has been reached
    6.	The election results will showcase all candidates with non-zero votes 
*/

contract Owner {

    address private owner;

    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    
    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
    
    constructor() public {
        owner = msg.sender; 
        emit OwnerSet(address(0), owner);
    }

    function getOwner() external view returns (address) {
        return owner;
    }
    
}



contract RepElection is Owner{
    
    struct Member {
        uint id; // For indexed search of name or result
        bool voted; // For checking if everyone has voted only once
        uint vote;  // The member voted for
    }
    
    // public states
    uint public deadline;
    bytes32 public role;
    mapping (address=>bool) public access;
    uint public memberCount;
    uint public totalVoted;
    bool public setupFinished;
 
    
    // private states
    mapping (address=>Member) private members;
    bytes32[] private memberList;
    uint[] private results;
    
    
    // lock
    bool datalock;
    
    // event
    event LogVote(address member);
    event LogCreation(bytes32 role, uint deadline);
    event LogMemberAdded(bytes32 name, address account);
    
    
     /**
     * Modifiers
     */
    modifier isMember {
        require(
            access[msg.sender],
            "You have no access to this election."
        );
        _;
    }
    
    modifier resultsPublished {
        require(
            totalVoted==memberCount||now>deadline, // Check if deadline has reached or all members have voted.
            "The Election Results cannot be published yet."
        );

        _;
    }
 
    /**
     * defaults
     */
     
    constructor(uint timestamp,bytes32 rolename) public {
        deadline = timestamp;
        role = rolename;
        emit LogCreation(rolename, timestamp);
    }
    
    /**
     * Operations by administrator
     */
 
    function addMember(bytes32 name, address acct) public isOwner{
        // Add member and assign index id.
        require(!datalock);
        datalock=true;
        
        access[acct] = true;
        members[acct] = Member (memberCount,false,0);
        memberList.push(name);
        results.push(0);
        memberCount += 1;
        
        datalock=false;
        emit LogMemberAdded(name,acct);
    }
    

    function finishSetup() public isOwner {
        setupFinished = true;
    }
    
    function endElection() public isOwner{
        selfdestruct(msg.sender);
    }
    
    
    
    /**
     * Operations by members
     */
    
    function vote(uint target) public isMember{
        require(
           !members[msg.sender].voted, 
            "You have already voted."
        );
        members[msg.sender].voted = true;
        members[msg.sender].vote = target;
        results[target] += 1;
        totalVoted +=1;
        emit LogVote(msg.sender);
    }
    
    function getName() public view isMember returns(bytes32) {
        uint myID = members[msg.sender].id;
        return memberList[myID];
    }
    
    function getVote() public view isMember returns(uint) {
        require(members[msg.sender].voted);
        return members[msg.sender].vote;
    }
    
    
    
    /**
     * General getters 
     */ 
     
    function getMemberList() public view returns(bytes32[]) {
        return memberList;
    }
    
    
    function getResults() public view resultsPublished returns(uint[]) {
        return results;
    }


    
    
}