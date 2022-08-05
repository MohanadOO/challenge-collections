//https://leetcode.com/problems/verifying-an-alien-dictionary/
//Easy

function isAlienSorted(words: string[], order: string): boolean {
  for (let i = 0; i < words.length - 1; i++) {

    let minLen = Math.min(words[i].length, words[i+1].length)
    let flag = false

    for (let j = 0; j < minLen; j++) {
      if (words[i][j] != words[i+1][j]) {
        if (order.indexOf(words[i][j]) > order.indexOf(words[i+1][j])) {
          return false
        }
        flag = true
        break
      }
    }
    if (!flag && words[i].length > words[i+1].length) return false
  }
  return true
}

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'))
