function allSameCase(word) {
  const wordArr = word.toString().split('')

  const isAllUpperCase = wordArr.every((letter) => {
    return letter === letter.toUpperCase()
  })

  if (isAllUpperCase) return true

  return wordArr.every((letter) => {
    return letter === letter.toLowerCase()
  })
}

let result = allSameCase('Hello')
console.log(result)
