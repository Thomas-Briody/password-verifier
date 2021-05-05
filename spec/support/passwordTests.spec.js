/* eslint-env node, jasmine */ 

const passwordVerifier = require('../../src/index')

// import passwordVerifier from '../../src/index'

describe('Password Checks', function() {
  it('fails if less than 8 characters', function() {
    const tooShort = 'short'
    expect(() => passwordVerifier(tooShort)).toThrowError('too short')
  })
  it('fails if null', function() {
    const nullPassword = null
    expect(() => passwordVerifier(nullPassword)).toThrowError('null!')
  })
  it('fails if no lowercase characters', function() {
    const noLowercase = 'HELLOSDSDSADA'
    expect(() => passwordVerifier(noLowercase)).toThrowError('need a lowercase character!')
  })
  it('fails if no uppercase characters', function() {
    const noUppercase = 'hellosdsdsds'
    expect(() => passwordVerifier(noUppercase)).toThrowError('need an uppercase character!')
  })
  it('fails if no number', function() {
    const noNumbers = 'Hello!long'
    expect(() => passwordVerifier(noNumbers)).toThrowError('need a number!')
  })
  it('succeeds if all parameters are met', function() {
    const usablePassword = 'Passw0rd1'
    expect(() => passwordVerifier(usablePassword)).toBe(true)
  })
})

// it('succeeds if longer than 8 characters', function() {
//   const longEnough = 'longenough'
//   expect(() => passwordVerifier(longEnough)).toThrow('perfect!')
// })
