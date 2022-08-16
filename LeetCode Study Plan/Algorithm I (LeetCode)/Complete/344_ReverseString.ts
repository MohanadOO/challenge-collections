//https://leetcode.com/problems/reverse-string/
//Easy

function reverseString(s: string[]): void {
  const result: string[] = []
  for (let i = s.length - 1; i >= 0; i--) result.push(s[i])
  s.splice(0, s.length, ...result)
}

//One Line Solution
function reverseStringOneLine(s: string[]): void {
  s.splice(0, s.length, ...s.reverse())
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
