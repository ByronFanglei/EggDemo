module.exports = ({ router, controller }) => {
  router.get('/', controller.home.index)
  router.get('/login', controller.account.login)
  router.get('/register/:age', controller.account.register)
  router.get('/userlist', controller.home.userlist)
}
