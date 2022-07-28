//https://leetcode.com/problems/reverse-string/
//Easy

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const result = []
  for (let i = s.length - 1; i >= 0; i--) {
    result.push(s[i])
  }
  s.splice(0, s.length, ...result)
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
