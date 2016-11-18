'use strict'

module.exports = setup

function setup (ctx, opts, cb) {
  const {startPolyfillService} = ctx

  startPolyfillService(opts.port, (err, app) => {
    if (err) { return cb(err) }
    ctx.polyfillExpressApp = app
    cb(null, ctx)
  })
}
