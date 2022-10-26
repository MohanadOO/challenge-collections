//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
//Easy



function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    return arrayStringsAreEqualIterative(word1, word2)
    // return arrayStringsAreEqualOneLine(word1, word2)
};


function arrayStringsAreEqualIterative(
  word1: string[],
  word2: string[]
): boolean {
  let result1: string = '';
  let result2: string = '';

  for (let word of word1){
    result1 += word
  }
  for (let word of word2){
    result2 += word
  }
  return result1 === result2
};

function arrayStringsAreEqualOneLine(word1: string[], word2: string[]): boolean {
    return word1.join('') === word2.join('')
};


console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']))
console.log(arrayStringsAreEqual(['a', 'cb'], ['ab', 'c']))
