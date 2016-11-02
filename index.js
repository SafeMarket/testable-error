const sprintf = require('sprintf-js').sprintf

module.exports = function createTestableErrorClass(name, format) {

  function TestableError(){

    const args = Array.prototype.slice.call(arguments)
    const sprintfArgs = [format].concat(args)

    this.message = sprintf.apply(this, sprintfArgs)

    const last_part = new Error().stack.match(/[^\s]+$/)
    this.stack = `${this.name} at ${last_part}: ${this.message}`

  }

  TestableError.prototype  = Object.create(Error.prototype)
  TestableError.prototype.name = name
  TestableError.prototype.message = ''
  TestableError.prototype.constructor = TestableError

  return TestableError

}