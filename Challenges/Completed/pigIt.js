//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  const getWords = str.split(' ')

  return getWords
    .map((word) => {
      const wordCharCode = word[0].charCodeAt()
      if (
        wordCharCode <= 64 ||
        wordCharCode <= 91 >= 96 ||
        wordCharCode <= 123 >= 126
      )
        return word[0]

      const firstLetterPlusAY = word[0] + 'ay'
      return word.slice(1) + firstLetterPlusAY
    })
    .join(' ')
}

console.log(pigIt('Hello World !'))
