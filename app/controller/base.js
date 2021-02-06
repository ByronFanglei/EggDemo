const { Controller } = require('egg')

class BaseController extends Controller {
  JsonResult(data = null, isSuccess = true) {
    return {
      data,
      success: isSuccess
    }
  }
}

module.exports = BaseController
