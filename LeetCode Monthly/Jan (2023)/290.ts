//https://leetcode.com/problems/word-pattern/

function wordPattern(pattern: string, s: string): boolean {
  const sArr = s.split(' ')
  if (pattern.length !== sArr.length) return false

  const map = new Map()
  const added: string[] = []

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i]) && !added.includes(sArr[i])) {
      map.set(pattern[i], sArr[i])
      added.push(sArr[i])
    } else {
      if (map.get(pattern[i]) !== sArr[i]) return false
    }
  }
  return true
}

console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('aaaa', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog dog dog dog'))
