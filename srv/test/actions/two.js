'use strict'

const {test} = require('tap')
const {name} = require('../../../package.json')
const action = require('../../actions/two')

test(`role: '${name}', cmd: 'two'`, (t) => {
  const ctx = {}
  const two = action(ctx)

  two({role: name, cmd: 'two'}, (err, result) => {
    t.error(err)
    t.deepEqual({my: 'action two'}, result)
    t.end()
  })
})
