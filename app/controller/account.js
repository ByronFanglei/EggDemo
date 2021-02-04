const { Controller } = require('egg')

class AccountController extends Controller {
  async login() {
    const { ctx } = this
    console.log(ctx.query)
    const { username, password } = ctx.query
    if (username === 'byron' && password === '123123') {
      ctx.body = 'success'
    } else {
      ctx.body = 'error'
    }
    
  }

  async register() {
    const { ctx } = this
    console.log(ctx.params)
    const { age } = ctx.params
    if (age === '24') {
      ctx.body = 'register success'
    } else {
      ctx.body = 'register error'
    }
    
  }
}

module.exports = AccountController;
