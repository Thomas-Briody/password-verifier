const { nullCheck, lowercaseCheck, uppercaseCheck, lengthCheck, numberCheck } = require('./functions')

function passwordVerifier(str){
  // if (str === null || str === '') throw new Error('Password cannot be blank')
  //* All comparisons could be refactored as above, however I want to ensure code is easily readable
 
  if (nullCheck(str)) {
    throw new Error('Password cannot be blank')
  }  
  
  if (lowercaseCheck(str)) {
    throw new Error('Password requires a lowercase character')
  }

  //* If the code reaches below, 2 conditions are correct (password is not null and contains lowercase character)

  if (!uppercaseCheck(str) || !lengthCheck(str) || !numberCheck(str) ) {
    return true
  } else throw new Error('Insufficient')
}

module.exports = passwordVerifier





