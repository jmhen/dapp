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
        bytes32 name; // Names will be showcased for easier voting
        bool voted; // For checking if everyone has voted only once
        address vote;  // The member voted for
        uint noOfVotes; // Number of votes received 
    }
    
    
    mapping (address=>bool) public access;
    mapping(address=>Member) private members;
    
    bool membersAdded;
    uint deadline;
    
    event LogVote(address member);
    
    
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
    
    modifier canPublish {
        require(
            now >= deadline, // Check if deadline has reached or all members have voted.
            "The Election Results cannot be published yet."
        );

        _;
    }
 
    /**
     * defaults
     */
     
    constructor() {
        deadline = now + 10 * 1 days;
    }
    
    /**
     * Operations by administrator
     */
     
    
    function setDeadline(uint _days) public isOwner{
        deadline = now + _days * 1 days;
    }
    
    function addMember(bytes32 name, address acct) public isOwner{
        access[acct] = true;
        members[acct] = Member (name,false,0,0);
    }
    
    function endElection() public isOwner{
        selfdestruct(msg.sender);
    }
    
    /**
     * Operations by members
     */
    
    
     
    function vote(address target) public isMember{
        require(
           !members[msg.sender].voted, 
            "You have already voted."
        );
        members[msg.sender].voted = true;
        members[msg.sender].vote = target;
        emit LogVote(msg.sender);
    }
    
    
    /**
     * General methods for frontend
     */ 
     
    function getName ( address addr) public returns (bytes32){
        return members[addr].name;
    }
    
    function publish () public canPublish{
        //sorting of results
    }
    

    
}