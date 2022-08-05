//https://leetcode.com/problems/to-lower-case/
//Easy

function toLowerCase(s: string): string {
  return toLowerCaseUsingMap(s)
  return toLowerCaseUsingForLoop(s)
}

function toLowerCaseUsingMap(s: string): string {
  return s
    .split('')
    .map((letter) => letter.toLowerCase())
    .join('')
}

function toLowerCaseUsingForLoop(s: string): string {
  let result = ''

  for (let letter of s) {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      result += String.fromCharCode(letter.charCodeAt(0) + 32)
      continue
    }
    result += letter
  }
  return result
}

console.log(toLowerCase('Hello'))
console.log(toLowerCase('here'))
console.log(toLowerCase('LOVELY'))
