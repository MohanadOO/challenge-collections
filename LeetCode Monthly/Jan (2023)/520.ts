//https://leetcode.com/problems/detect-capital/

function detectCapitalUse(word: string): boolean {
  return /^[A-Z]+$|^.[a-z]*$/g.test(word)
}

console.log(detectCapitalUse('USA'))
console.log(detectCapitalUse('FlaG'))
console.log(detectCapitalUse('DSFSdFS'))
console.log(detectCapitalUse('wow'))
console.log(detectCapitalUse('g'))
