//https://leetcode.com/problems/implement-strstr/
//Easy

function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}

console.log(strStr('hello', 'll'))
console.log(strStr('a', 'a'))
console.log(strStr('aaaaa', 'bba'))
