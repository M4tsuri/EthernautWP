const Delegation = artifacts.require('Delegation')
const Delegate = artifacts.require("Delegate")

module.exports = function(deployer) {
    deployer.then(async() => {
        await deployer.deploy(Delegate)
        await deployer.deploy(Delegation, Delegate.address)
    })
}