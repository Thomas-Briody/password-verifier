





function passwordVerifier(str){

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
    throw new Error('null!')
  } 

  const pwIsTooShort = isTooShort(str)
  if (pwIsTooShort) {
    throw new Error('too short')
  }

  const pwLowercaseCheck = lowercaseCheck(str)
  if (pwLowercaseCheck) {
    throw new Error('need a lowercase character!')
  }

  const pwUppercaseCheck = uppercaseCheck(str) 
  if (pwUppercaseCheck) {
    throw new Error('need an uppercase character!')
  }
  
  const pwNumberCheck = numberCheck(str)
  if (pwNumberCheck) {
    throw new Error('need a number!')
  }


} 



module.exports = passwordVerifier





