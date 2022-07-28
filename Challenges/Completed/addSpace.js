function capSpace(txt) {
  return txt.replace(/([A-Z])/g, ' $1').trim()
}

console.log(capSpace('iLoveMyFriend!'))
