const Router = require('../model/router')
const { POST, GET } = require('../utils/enum')

let routers = function(controller) {
  return [
    new Router(GET, '/', controller.home.index),
    new Router(POST, '/login', controller.account.login),
    new Router(GET, '/register', controller.account.register),
    new Router(GET, '/userlist', controller.home.userlist),
    new Router(POST, '/posttest', controller.home.posttest),
    new Router(POST, '/userdel', controller.home.userdel),
    new Router(POST, '/useradd', controller.home.useradd),
  ]
}

module.exports = routers
