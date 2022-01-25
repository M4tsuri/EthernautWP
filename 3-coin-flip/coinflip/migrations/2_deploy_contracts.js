const CoinFlip = artifacts.require('CoinFlip')

module.exports = function(deployer) {
    deployer.deploy(CoinFlip)
}