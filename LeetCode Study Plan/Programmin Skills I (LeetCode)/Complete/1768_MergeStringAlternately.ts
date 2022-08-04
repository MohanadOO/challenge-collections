//https://leetcode.com/problems/merge-strings-alternately/
//Easy

function mergeAlternately(word1: string, word2: string): string {
  let output = ''
  let i = 0

  while (word1.length + word2.length !== output.length) {
    if (word1[i]) output += word1[i]
    if (word2[i]) output += word2[i]
    i++
  }

  return output
}

console.log(mergeAlternately('abc', 'pqr'))
console.log(mergeAlternately('ab', 'pqrs'))
