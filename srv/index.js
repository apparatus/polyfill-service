'use strict'

const wiring = require('./wiring')
const config = require('./config')

wiring(config, service, ready)

function service (ctx) {

  // nothing to do in this (unusual) case :)

}

function ready (err, ctx) {
  if (err) { throw err }

  const {polyfillExpressApp, log} = ctx
  const {name} = config

  log.debug(polyfillExpressApp.address())
  log.info(`${name} service started, head to http://localhost:${config.setup.port} for polyfill docs`)
}
