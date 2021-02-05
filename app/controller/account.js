const { Controller } = require('egg')

class AccountController extends Controller {
  async login() {
    const { ctx } = this
    const { username, password } = ctx.request.body
    console.log(username, password)
    ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
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
