//https://leetcode.com/problems/valid-anagram/
//Easy

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  //Approach 1
  return t.split('').every((char) => {
    if (s.includes(char)) {
      s = s.replace(s[s.indexOf(char)], '')
      return true
    } else {
      return false
    }
  })

  //Approach 2
  while (s.length !== 0) {
    if (t.includes(s[0])) {
      t = t.replace(t[t.indexOf(s[0])], '')
      s = s.replace(s[0], '')
    } else return false
  }
  return true

  //Approach 3
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')
  return s === t
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
console.log(isAnagram('aacc', 'ccac'))
