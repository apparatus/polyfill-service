'use strict'

const startPolyfillService = require('polyfill-service/service')
const pino = require('pino')

module.exports = context

function context (opts, cb) {
  const ctx = {
    startPolyfillService: startPolyfillService,
    log: pino()
  }

  cb(null, ctx)
}
