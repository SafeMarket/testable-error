const expect = require('chai').expect
const createTestableErrorClass = require('./')

describe('createTestableErrorClass', () => {

  it('should be a function', () => {
    expect(createTestableErrorClass).to.be.a.function
  })

})

 describe('MyTestableError', () => {

  let MyTestableError
  let YourTestableError
  let myTestableError


  it('should create MyTestableError and YourTestableError', () => {
    MyTestableError = createTestableErrorClass('MyTestableError')
    YourTestableError = createTestableErrorClass('YourTestableError')
  })

  describe('myTestableError', () => {

    it('should instantiate', () => {
      myTestableError = new MyTestableError('My custom message: hola amigo')
    })

    it('should be instance of MyTestableError', () => {
      expect(myTestableError).to.be.instanceOf(MyTestableError)
    })

    it('should NOT be instance of YourTestableError', () => {
      expect(myTestableError).to.not.be.instanceOf(YourTestableError)
    })

    it('should be instance of Error', () => {
      expect(myTestableError).to.be.instanceOf(Error)
    })

    it('should have correct message', () => {
      expect(myTestableError.message).to.equal('My custom message: hola amigo')
    })

    it('should throw MyTestableError', () => {
      expect(() => { throw myTestableError }).to.throw(MyTestableError)
    })

    it('should NOT throw MyTestableError', () => {
      expect(() => { throw myTestableError }).to.not.throw(YourTestableError)
    })

  })

  describe('readme examples', () => {

    it('should pass', () => {

      const MySimpleError = createTestableErrorClass('MySimpleError')

      expect(function(){
        throw new MySimpleError('oh no!')
      }).to.throw(MySimpleError)

    })
  })

})
