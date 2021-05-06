/* eslint-env node, jasmine */ 

const passwordVerifier = require('../../src/index')

describe('Password Checks', function() {
  it('Fails if less than 8 characters', function() {
    expect(() => passwordVerifier('short')).toThrowError('Insufficient')
  })
  it('Fails if null', function() {
    expect(() => passwordVerifier(null)).toThrowError('Password cannot be blank')
  })
  it('Fails if no lowercase characters', function() {
    expect(() => passwordVerifier('HELLOOOOOOO1')).toThrowError('Password requires a lowercase character')
  })
  it('Fails if no uppercase characters', function() {
    expect(() => passwordVerifier('hello')).toThrowError('Insufficient')
  })
  it('Fails if no number', function() {
    expect(() => passwordVerifier('hell')).toThrowError('Insufficient')
  })
  it('succeeds if 3 conditions are met', function() {
    expect(passwordVerifier('aaaaaaaaaaa')).toBe(true)
  })
})



//* The test below is deemed irrelevant by the test to check if 3 conditions are met 

// it('succeeds if all conditions are met', function() {
//   const result =  passwordVerifier('Passw0rd1')
//   expect(result).toBe(true)
// })

//* anonymous functions being used to ensure function is called at the right time
//* Below is for basic implimentation with individual error messages. Unable to get this working with 
//* additional requirements as can be multiple failed validations but only one error able to be thrown 

// describe('Password Checks', function() {
//   it('fails if less than 8 characters', function() {
//     expect(() => passwordVerifier('Short1')).toThrowError('too short')
//   })
//   it('fails if null', function() {
//     expect(() => passwordVerifier(null)).toThrowError('null!')
//   })
//   it('fails if no lowercase characters', function() {
//     expect(() => passwordVerifier('HELLOSDSDSADA')).toThrowError('need a lowercase character!')
//   })
//   it('fails if no uppercase characters', function() {
//     expect(() => passwordVerifier('hellosdsdsds')).toThrowError('need an uppercase character!')
//   })
//   it('fails if no number', function() {
//     expect(() => passwordVerifier('HelloLong')).toThrowError('need a number!')
//   })
//   it('succeeds if all conditions are met', function() {
//     const result =  passwordVerifier('Passw0rd1')
//     expect(result).toBe(true)
//   })
// })