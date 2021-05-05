/* eslint-env node, jasmine */ 

const passwordVerifier = require('../../src/index')

// import passwordVerifier from '../../src/index'
//* anonymous functions being used to ensure function is called at the right time

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
  it('succeeds if all conditions are met', function() {
    const result =  passwordVerifier('Passw0rd1')
    expect(result).toBe(true)
  })
  it('succeeds if 3 conditions are met', function() {
    const result =  passwordVerifier('Aa1')
    expect(result).toBe(true)
  })
  it('fails if 3 conditions are met but no lowercase', function() {
    const testFunc = () => passwordVerifier('LONGPASS1')
    expect(testFunc).toThrowError('requires a lowercase character!')
  })
})

