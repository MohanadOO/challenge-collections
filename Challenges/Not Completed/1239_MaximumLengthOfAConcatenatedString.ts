//https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
//Medium

/*
    - Return the maximum length of a string s.
    - String s is formed by the concatenation of a subsequence of arr that has unique characters
*/

function maxLength(arr: string[]): number {
  let result: number = 0

  for (let i = 0; i < arr.length; i++) {
    let s = arr[i]
    if (s.length > result) result = s.length 

    for (let j = i + 1; j < arr.length; j++) {
      const elem = arr[j]
    }

    if (result === 26) return result
  }
  return result
}

console.log(maxLength(['un', 'iq', 'ue']))
console.log(maxLength(['cha', 'r', 'act', 'ers']))
console.log(maxLength(['abcdefghijklmnopqrstuvwxyz']))
