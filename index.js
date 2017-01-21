module.exports = function createTestableErrorClass(name) {
  function TestableError(message){
    this.message = `${this.name}: ${message}`
    this.stack = new Error().stack

  }
  TestableError.prototype  = Object.create(Error.prototype)
  TestableError.prototype.name = name
  TestableError.prototype.constructor = TestableError
  Object.defineProperty(TestableError, 'name', { value: name })
  return TestableError
}
