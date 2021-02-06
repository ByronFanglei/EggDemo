let success = () => {
  return {
    success: true
  }
}

let fail = () => {
  return {
    success: false
  }
}

module.exports = {
  success,
  fail,
}