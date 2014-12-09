var expect = require('chai').expect

var PRUpdater = require('../index')

var config = require('./config.json')


describe('PRUpdater', function () {
  var api

  beforeEach(function () {
    api = new PRUpdater(config.token)
  })

  afterEach(function () {
    delete api
  })

  it('', function (done) {
    api._github.user.getFollowingFromUser({user: 'fanatid'}, function () {
      console.log(arguments)
      done()
    })
  })
})
