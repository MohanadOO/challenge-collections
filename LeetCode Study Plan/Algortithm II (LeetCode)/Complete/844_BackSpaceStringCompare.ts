//https://leetcode.com/problems/backspace-string-compare/
//Easy

function backspaceCompare(s: string, t: string): boolean {
  const newS: string[] = []
  const newT: string[] = []

  s.split('').forEach((letter) => {
    if (letter === '#') {
      newS.pop()
    } else {
      newS.push(letter)
    }
  })

  t.split('').forEach((letter) => {
    if (letter === '#') {
      newT.pop()
    } else {
      newT.push(letter)
    }
  })
  if (newS.join('') === newT.join('')) {
    return true
  }
  return false
}

console.log(backspaceCompare('ab#c', 'ad#c'))
console.log(backspaceCompare('ab##', 'c#d#'))
console.log(backspaceCompare('a#c', 'b'))
