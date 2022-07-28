function anagrams(word, words) {
  let wordCharCode = word.split('').map((letter) => letter)
  console.log(wordCharCode)

  return words.filter((i) => {
    if (i.length !== word.length) return false

    const splitWord = i.split('').map((letter) => letter)
    return (
      splitWord.every((letter) => wordCharCode.includes(letter)) &&
      wordCharCode.every((letter) => splitWord.includes(letter))
    )
  })
}

const result = anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
console.log(result)
