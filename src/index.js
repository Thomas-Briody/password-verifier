
function passwordVerifier(str){


  //* Functions all return true if condition is NOT met

  function isNull(str){
    if (str === null || str === '') {
      return true
    }
  }
  
  function isTooShort(str){
    if (str.length < 9) {
      return true 
    }
  }

  function lowercaseCheck(str) {
    if (/[a-z]/.test(str) === false) {
      return true
    }
  } 

  function uppercaseCheck(str) {
    if ((/[A-Z]/.test(str)) === false) {
      return true
    }
  } 

  function numberCheck(str) {
    if ((/[0-9]/.test(str)) === false) {
      return true
    }
  } 
 
  const pwIsNull = isNull(str)
  if (pwIsNull) {
    throw new Error('Password cannot be blank')
  }  
  
  const pwHasNoLowerCase = lowercaseCheck(str)
  if (pwHasNoLowerCase) {
    throw new Error('Password requires a lowercase character')
  }

  //* If the code reaches below, 2 conditions are correct (password is not null and contains lowercase character)

  const pwIsTooShort = isTooShort(str)
  const pwHasNoUpperCase = uppercaseCheck(str) 
  const pwHasNoNumber = numberCheck(str)


  if (!pwHasNoUpperCase || !pwIsTooShort || !pwHasNoNumber ) {
    return true
  } else throw new Error('Insufficient')

}

console.log('FUNCTION CHECK>', passwordVerifier('aaAa'))

module.exports = passwordVerifier





