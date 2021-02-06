const BaseController = require('./base')
const Users = require('../model/users')

let userList = [
  new Users(1, 'Byron', '202126'),
  new Users(2, 'Ace', 'qweqwe'),
]

class HomeController extends BaseController {
  async index() {
    this.ctx.body = 'hello egg'
  }
  
  async userlist() {
    const { ctx, JsonResult } = this
    ctx.body = JsonResult(userList)
  }

  async posttest() {
    this.ctx.body = { 'post': 'posttest' }
  }

  async userdel() {
    const { ctx, JsonResult } = this
    const { id } = ctx.request.body
    userList = userList.filter(item => item.id !== parseInt(id))
    ctx.body = JsonResult()
  }

  async useradd() {
    const { ctx, JsonResult } = this
    const { username, password } = ctx.request.body
    console.log(username, password)
    userList.push(new Users(Date.now() + 1, username, password))
    ctx.body = JsonResult()
  }
}

module.exports = HomeController;
