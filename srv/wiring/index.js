'use strict'
const context = require('./context')
const setup = require('./setup')

module.exports = wiring

function wiring (opts, service, ready) {
  context(opts.context, init)

  function init (err, ctx) {
    if (err) return ready(err)
    service(ctx)
    setup(ctx, opts.setup, (err, ctx) => ready(err, ctx))
  }
}

