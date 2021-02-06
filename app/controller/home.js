const { Controller } = require('egg')
const Users = require('../model/users')

let userList = [
  new Users(1, 'Byron', '202126'),
  new Users(2, 'Ace', 'qweqwe'),
]

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hello egg'
  }
  
  async userlist() {
    this.ctx.body = userList
  }

  async posttest() {
    this.ctx.body = { 'post': 'posttest' }
  }

  async userdel() {
    const { ctx } = this
    const { id } = ctx.request.body
    userList = userList.filter(item => item.id !== parseInt(id))
    ctx.body = { success: true }
  }

  async useradd() {
    const { ctx } = this
    const { username, password } = ctx.request.body
    console.log(username, password)
    userList.push(new Users(Date.now() + 1, username, password))
    ctx.body = { success: true }
  }
}

module.exports = HomeController;
