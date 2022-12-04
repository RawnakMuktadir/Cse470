require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/E-4kFJXWta-Lrlxzc9V0_iqA6RKm0gVl',
      accounts: [
        '68850dadbd2e19578c70576190877a9a7234c3c1cf1dbcceb2acd1501ab4942d',
      ],
    },
  },
}