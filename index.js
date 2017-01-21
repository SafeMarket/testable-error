module.exports = function createTestableErrorClass(name) {
  function TestableError(message){
    this.message = `${this.name}: ${message}`
    const last_part = new Error().stack.match(/[^\s]+$/)
    this.stack = `${this.name} at ${last_part}: ${this.message}`

  }
  TestableError.prototype  = Object.create(Error.prototype)
  TestableError.prototype.name = name
  TestableError.prototype.constructor = TestableError
  return TestableError
}
