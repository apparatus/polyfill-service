'use strict'

const {test} = require('tap')
const {name} = require('../../../package.json')
const action = require('../../actions/one')

test(`role: '${name}', cmd: 'one'`, (t) => {
  const mocks = [(args, cb) => {
    t.deepEqual(args, {role: 'another-service', cmd: 'cmd'}, 'invokes another-service')
    cb(null, {more: 'data'})
  }, (args, cb) => {
    cb(Error('some error'))
  }]

  const ctx = {mu: {
    dispatch: (args, cb) => mocks.shift()(args, cb)
  }}

  const one = action(ctx)

  one({role: name, cmd: 'one'}, (err, result) => {
    t.error(err)
    t.deepEqual(result.moreStuff, {more: 'data'}, 'attaches more-service data to moreStuff')
  })

  one({role: name, cmd: 'one'}, (err) => {
    t.ok(err)
    t.end()
  })
})

