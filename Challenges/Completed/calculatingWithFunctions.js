//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

const zero = (operation) => (operation ? calculate(0 + operation) : '0')
const one = (operation) => (operation ? calculate(1 + operation) : 1)
const two = (operation) => (operation ? calculate(2 + operation) : 2)
const three = (operation) => (operation ? calculate(3 + operation) : 3)
const four = (operation) => (operation ? calculate(4 + operation) : 4)
const five = (operation) => (operation ? calculate(5 + operation) : 5)
const six = (operation) => (operation ? calculate(6 + operation) : 6)
const seven = (operation) => (operation ? calculate(7 + operation) : 7)
const eight = (operation) => (operation ? calculate(8 + operation) : 8)
const nine = (operation) => (operation ? calculate(9 + operation) : 9)

function plus(num1, num2) {
  if (num1 && num2 === undefined) return '+' + num1
  return num1 + num2
}
function minus(num1, num2) {
  if (num1 && num2 === undefined) return '-' + num1
  return num1 - num2
}
function times(num1, num2) {
  if (num1 && num2 === undefined) return '*' + num1
  return num1 * num2
}
function dividedBy(num1, num2) {
  if (num1 && num2 === undefined) return '/' + num1
  return num1 / num2
}

function calculate(result) {
  const num1 = parseInt(result.split('')[0])
  const operation = result.split('')[1]
  const num2 = parseInt(result.split('')[2])

  if (operation === '+') return plus(num1, num2)
  if (operation === '-') return minus(num1, num2)
  if (operation === '*') return times(num1, num2)
  if (operation === '/') return Math.floor(dividedBy(num1, num2))
}

const result = four(times(two()))
console.log(result)
