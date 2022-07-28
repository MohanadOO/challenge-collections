//https://leetcode.com/problems/reverse-words-in-a-string-iii/
//Easy

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const splitWords = s.split(' ')
  return splitWords
    .map((word) => {
      return word.split('').reverse().join('')
    })
    .join(' ')
}

//Another Solution
var reverseWords2 = function (s) {
  const reverseWordsResult = []
  let reverseOneWord = []

  const splitWords = s.split(' ')
  for (let i = 0; i < splitWords.length; i++) {
    for (let j = splitWords[i].length - 1; j >= 0; j--) {
      reverseOneWord.push(splitWords[i][j])
    }
    reverseWordsResult.push(reverseOneWord.join(''))
    reverseOneWord = []
  }
  return reverseWordsResult.join(' ')
}

console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords2("Let's take LeetCode contest"))
