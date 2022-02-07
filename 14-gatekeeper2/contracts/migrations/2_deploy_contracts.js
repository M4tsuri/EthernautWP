const Attack = artifacts.require('Attack')
const GatekeeperTwo = artifacts.require('GatekeeperTwo')

module.exports = function(deployer) {
    deployer.then(async() => {
        // await deployer.deploy(GatekeeperTwo)
        await deployer.deploy(Attack, "0xea0c7A6C0Da1195654e7b8338969837eEcD37FB2")
    })
}