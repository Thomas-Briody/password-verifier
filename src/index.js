

function passwordVerifier(str){
  if (str === null || str === '') {
    return 'password cannot be null'
  } else if (str.length < 9) {
    throw new Error('too short')
  } else throw 'perfect!'
} 

module.exports = passwordVerifier




