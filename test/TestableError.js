const expect = require('chai').expect
const createTestableErrorClass = require('../')

describe('createTestableErrorClass', () => {

  it('should be a function', () => {
    expect(createTestableErrorClass).to.be.a.function
  })

})

 describe('MyTestableError', () => {

  let MyTestableError
  let myTestableError

  it('should be created', () => {
    MyTestableError = createTestableErrorClass('MyTestableError', 'My custom message: %s %s')
  })

  describe('myTestableError', () => {

    it('should instantiate', () => {
      myTestableError = new MyTestableError('hola', 'amigo')
    })

    it('should be instance of MyTestableError', () => {
      expect(myTestableError).to.be.instanceOf(MyTestableError)
    })

    it('should be instance of Error', () => {
      expect(myTestableError).to.be.instanceOf(Error)
    })

    it('should have correct message', () => {
      expect(myTestableError.message).to.equal('My custom message: hola amigo')
    })

    it('should throw', () => {
      expect(() => { throw myTestableError }).to.throw(MyTestableError)
    })

  })

  describe('readme examples', () => {

    it('should pass', () => {
    
      const MySimpleError = createTestableErrorClass('MySimpleError')
      const MyTemplatedError = createTestableErrorClass('MyTemplatedError', '%s %s !')
       
       
      expect(function(){
        throw new MySimpleError('hello', 'world')
      }).to.throw(MySimpleError)
       
      expect(new MyTemplatedError('hello', 'world').message).to.equal('hello world !')

    })
  })

})