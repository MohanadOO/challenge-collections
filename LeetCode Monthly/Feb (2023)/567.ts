//https://leetcode.com/problems/permutation-in-string/submissions

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  const s1_map = new Array(26).fill(0)
  const s2_map = new Array(26).fill(0)

  for (let i = 0; i < s1.length; i++) {
    const ASCII_CODE_S1 = s1[i].charCodeAt(0)
    const ASCII_CODE_S2 = s2[i].charCodeAt(0)

    s1_map[ASCII_CODE_S1 - 97] += 1
    s2_map[ASCII_CODE_S2 - 97] += 1
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (isEqual(s1_map, s2_map)) return true

    s2_map[s2[i].charCodeAt(0) - 97] -= 1
    s2_map[s2[i + s1.length].charCodeAt(0) - 97] += 1
  }

  function isEqual(s1: string[], s2: string[]): boolean {
    for (let i = 0; i < 26; i++) {
      if (s1[i] === s2[i] && i === 25) return true
      if (s1[i] === s2[i]) continue
      else break
    }
    return false
  }

  if (isEqual(s1_map, s2_map)) return true
  return false
}

console.log(checkInclusion('ab', 'cbad'))
