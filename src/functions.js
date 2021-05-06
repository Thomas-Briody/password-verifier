
//* All of these functions return TRUE if condition is NOT met

function nullCheck(str){
  if (str === null || str === '') {
    return true
  }
}
function lengthCheck(str){
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

module.exports = {
  nullCheck,
  lengthCheck,
  lowercaseCheck,
  uppercaseCheck,
  numberCheck
}