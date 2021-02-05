class Router {
  constructor(method, path, action) {
    this.method = method
    this.path = path
    this.action = action
  }
}

module.exports = Router
