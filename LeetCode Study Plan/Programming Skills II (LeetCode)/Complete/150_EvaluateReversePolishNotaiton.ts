//https://leetcode.com/problems/evaluate-reverse-polish-notation/
//Medium

function evalRPN(tokens: string[]): number {
  return evalRPNMySolution(tokens)
  return evalRPNStack(tokens)
}

function evalRPNMySolution(tokens: string[]): number {
  let currNumbers: string[] = []

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].match(/[+-/*]$/g)) {
      const lastNumber = Number(currNumbers[currNumbers.length - 1])
      const secondsLastNumber = Number(currNumbers[currNumbers.length - 2])
      const operator = tokens[i]
      currNumbers.splice(
        currNumbers.length - 2,
        2,
        operation(secondsLastNumber, lastNumber, operator).toString()
      )
    } else currNumbers.push(tokens[i])
  }

  function operation(x: number, y: number, operator: string): number {
    if (operator === '+') return x + y
    else if (operator === '-') return x - y
    else if (operator === '*') return x * y
    else return x / y > 0 ? Math.floor(x / y) : Math.ceil(x / y)
  }

  return Number(currNumbers.join(''))
}

function evalRPNStack(tokens: string[]): number {
  let a: number | undefined, b: number | undefined
  const evaluate = {
    '+': () => a + b,
    '-': () => a - b,
    '*': () => a * b,
    '/': () => ~~(a / b),
  }
  const stack: number[] = []

  for (let t of tokens) {
    if (evaluate[t]) {
      b = stack.pop()
      a = stack.pop()
      stack.push(evaluate[t]())
    } else stack.push(~~t)
  }
  return stack[0]
}

console.log(evalRPN(['2', '1', '+', '3', '*']))
// console.log(evalRPN(['4', '13', '5', '/', '+']))
// console.log(
//   evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
// )
