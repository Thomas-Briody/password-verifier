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

})
