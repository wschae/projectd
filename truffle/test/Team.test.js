const Team = artifacts.require("../contracts/Team.sol");

contract('Team', accounts => {
    it("[the first account] should have non-zero balance", () => {
        assert.isTrue(accounts.length > 0);
        web3.eth.getBalance(accounts[0])
        .then(balance => {
            assert.isTrue(Number(balance) > 0);
        });
    });

    it("[the first account] should have non-zero balance (async)", async () => {
        assert.isTrue(accounts.length > 0);
        let balance = await web3.eth.getBalance(accounts[0]);
        assert.isTrue(Number(balance) > 0);
    });

    it("should initially have zero member", () => {
        Team.deployed()
        .then(instance => instance.countMembers.call())
        .then(count => {
            assert.equal(count, 0, "Initially should have zero member");
        });
    });

    it("should have the counter updated after adding one member", async () => {
        let team = await Team.deployed();
        let count = await team.countMembers.call();
        assert.equal(count, 0, "Initially should have zero member");
        await team.addMember('cyoh', 'QmT65VLCj2K5YW7k4Tomagg1VTz6fCtvSPJk1FCFpvT3wf');
        count = await team.countMembers.call();
        assert.equal(count, 1, "Initially should have zero member");
        let member = await team.members.call(0);
        assert.equal(member.name, 'cyoh');
        assert.equal(member.cid, 'QmT65VLCj2K5YW7k4Tomagg1VTz6fCtvSPJk1FCFpvT3wf');
    });
});