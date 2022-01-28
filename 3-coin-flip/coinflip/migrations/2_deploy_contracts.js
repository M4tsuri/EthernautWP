const CoinFlip = artifacts.require('CoinFlip')
const Attack = artifacts.require('Attack')

module.exports = function(deployer) {
    deployer.then(async() => {
        await deployer.deploy(CoinFlip);
        await deployer.deploy(Attack, CoinFlip.address)
    })
}