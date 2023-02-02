//https://leetcode.com/problems/verifying-an-alien-dictionary

function isAlienSorted(words: string[], order: string): boolean {
  for (let i = 0; i < words.length - 1; i++) {
    const curr = words[i]
    const next = words[i + 1]
    let flag = false

    for (let j = 0; j < Math.min(curr.length, next.length); j++) {
      const currIndex = order.indexOf(curr[j])
      const nextIndex = order.indexOf(next[j])
      if (curr[j] !== next[j]) {
        if (currIndex > nextIndex) return false
        flag = true
        break
      }
    }
    if (!flag && curr.length > next.length) return false
  }
  return true
}

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'))
