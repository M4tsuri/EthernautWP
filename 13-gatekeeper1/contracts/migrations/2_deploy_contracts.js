const Attack = artifacts.require('Attack')
const GatekeeperOne = artifacts.require('GatekeeperOne')

module.exports = function(deployer) {
    deployer.then(async() => {
        await deployer.deploy(GatekeeperOne)
        await deployer.deploy(Attack)
    })
}