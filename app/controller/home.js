const { Controller } = require('egg')

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hello egg'
  }
  
  async userlist() {
    this.ctx.body = ['a', 'b', {age: 24}]
  }

  async posttest() {
    this.ctx.body = { 'post': 'posttest' }
  }
}

module.exports = HomeController;
