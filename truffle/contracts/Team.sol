pragma solidity >=0.4.22 <0.7.0;

contract Team {
    struct Member {
        string name;
        string cid;
    }
    
    Member[] public members;
    
    function addMember(string memory name, string memory cid) public {
        members.push(Member({name:name, cid:cid}));
    }
    
    function countMembers() public view returns (uint) {
        return members.length;
    }
}