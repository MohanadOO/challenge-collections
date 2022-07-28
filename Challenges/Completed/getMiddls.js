//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  const splitWord = s.split('')
  const middleLetter = splitWord.length / 2

  if (splitWord.length % 2 == 1) {
    return splitWord[Math.floor(middleLetter)]
  }

  return splitWord[middleLetter - 1] + splitWord[middleLetter]
}

const result = getMiddle('A')
console.log(result)

function getMiddleShort(s) {
  return s.length % 2 == 1
    ? s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1)
    : s.substring(s.length / 2 - 1, s.length / 2 + 1)
}

const result1 = getMiddleShort('test')
console.log(result1)
