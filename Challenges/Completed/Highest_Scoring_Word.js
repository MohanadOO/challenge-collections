function high(sentence) {
  const wordArr = sentence.split(' ')

  let total = 0
  let totalList = []

  wordArr.map((word) => {
    word.split('').forEach((letter) => {
      if (letter === letter.toUpperCase()) {
        total = letter.charCodeAt() - 64 + total
      } else {
        total = letter.charCodeAt() - 96 + total
      }
    })
    totalList.push({ word, total })
    total = 0
  })

  const highestWord = totalList.sort((a, z) => {
    return z.total - a.total
  })

  return highestWord[0].word
}

const result = high('my name is osman')
console.log(result)
