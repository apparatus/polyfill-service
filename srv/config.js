const {name} = require('../package.json')

const env = process.env

module.exports = {
  name: name,
  dev: env.NODE_ENV !== 'production',
  context: {
    dev: env.NODE_ENV !== 'production'
  },
  setup: {
    port: env.POLYFILL_PORT
  }
}
