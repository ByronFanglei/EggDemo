const routers = require('./config/router')

module.exports = ({ router, controller }) => {
  routers(controller).forEach(item => {
    return router[item.method](item.path, item.action)
  })
}
