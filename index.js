module.exports = function createTestableErrorClass(name) {
  function TestableError(message){
    this.message = message
    this.error = new Error()
    this.stack = this.error.stack
  }
  TestableError.prototype  = Object.create(Error.prototype)
  TestableError.prototype.name = name
  TestableError.prototype.constructor = TestableError
  Object.defineProperty(TestableError, 'name', { value: name })
  return TestableError
}
