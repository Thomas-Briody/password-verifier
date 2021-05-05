/* eslint-env node, jasmine */ 

const passwordVerifier = require('../../src/index')

// import passwordVerifier from '../../src/index'

describe('A suite', function() {
  it('fails if less than 8 characters', function() {
    const tooShort = 'short'
    expect(() => passwordVerifier(tooShort)).toThrowError('too short')
  })
  it('succeeds if longer than 8 characters', function() {
    const longEnough = 'longenough'
    expect(() => passwordVerifier(longEnough)).toThrow('perfect!')
  })
  it('fails if null', function() {
    const nullPassword = null
    expect(() => passwordVerifier(nullPassword)).toThrowError('null!')
  })
  it('fails if no lowercase characters', function() {
    const noLowercase = 'HELLO'
    expect(() => passwordVerifier(noLowercase)).toThrowError('need a lowercase character!')
  })
  it('fails if no uppercase characters', function() {
    const noUppercase = 'hello'
    expect(() => passwordVerifier(noUppercase)).toThrowError('need an uppercase character!')
  })
  it('fails if no number', function() {
    const noNumbers = 'hello'
    expect(() => passwordVerifier(noNumbers)).toThrowError('need a number!')
  })
})
