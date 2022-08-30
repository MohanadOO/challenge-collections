//https://leetcode.com/problems/group-anagrams/
//Medium

function groupAnagrams(strs: string[]): string[][] {
  let obj = {}

  for (let str of strs) {
    let sortLetters = str.split('').sort().join('')
    if (obj[sortLetters]) {
      obj[sortLetters].push(str)
    } else {
      obj[sortLetters] = [str]
    }
  }

  return Object.values(obj)
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
// console.log(groupAnagrams([]))
// console.log(groupAnagrams(['', '', '']))
// console.log(groupAnagrams(['a']))
