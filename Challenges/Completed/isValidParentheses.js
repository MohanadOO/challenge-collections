// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
    
  const openParenLength = parens.split('(').length - 1
  const closeParenLength = parens.split(')').length - 1

  if (openParenLength !== closeParenLength) return false

  let openCounter = 0
  let closeCounter = 0

  return parens.split('').every((i) => {
    if (closeCounter > openCounter) return false
    else if (i === '(') openCounter++
    else if (i === ')') closeCounter++
    return true
  })
}

console.log(validParentheses('()'))
console.log(validParentheses(')(()))'))
console.log(validParentheses('('))
console.log(validParentheses('(())((()())())'))
console.log(validParentheses(''))
