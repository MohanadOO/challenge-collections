//https://leetcode.com/problems/break-a-palindrome/

/*
   - Replace only one character to make the string not a palindrome
   - The replaced character must be the smallest character that make the string not palindrome.
   - If there is no way to make the string not a palindrome return an empty string ""   
*/

function breakPalindrome(palindrome: string): string {
  if (palindrome.length === 1) return ''
  let arr = palindrome.split('')
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] > 'a') {
      arr[i] = 'a'
      return arr.join('')
    }
  }
  arr[arr.length - 1] = 'b'
  return arr.join('')
}

console.log(breakPalindrome('abccba'))
console.log(breakPalindrome('aba'))
