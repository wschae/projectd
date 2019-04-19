var Team = artifacts.require('./Team.sol');

module.exports = function(deployer) {
    deployer.deploy(Team);
}