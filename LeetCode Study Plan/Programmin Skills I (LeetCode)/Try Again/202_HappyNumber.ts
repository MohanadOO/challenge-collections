//https://leetcode.com/problems/happy-number/
//Easy

function isHappy(n: number): boolean {
  // return isHappyMySol(n)
  return isHappyPreComputedSquares(n)
}

//FIX Wrong Answers 
function isHappyMySol(n: number): boolean {
  if (n === 1) return true
  else if (n < 10) {
    return isHappy(Math.pow(n, 2))
  }

  const splitNumber = n.toString().split('')
  const x = Number(splitNumber[0])
  const y = Number(splitNumber[1])
  const sumOfSquares = Math.pow(x, 2) + Math.pow(y, 2)
  return isHappy(sumOfSquares)
}

//Solution Link 👇
//https://leetcode.com/problems/happy-number/discuss/315842/JavaScript-99-time-(pre-computed-squares)

const squares = {
  '0': 0,
  '1': 1,
  '2': 4,
  '3': 9,
  '4': 16,
  '5': 25,
  '6': 36,
  '7': 49,
  '8': 64,
  '9': 81,
}

function isHappyPreComputedSquares(n: number): boolean {
  if (n < 1) return false

  let set = new Set()

  while (!set.has(n)) {
    set.add(n)
    let string = n.toString()
    n = 0
    for (let i = 0; i < string.length; ++i) {
      n += squares[string[i]]
    }
    if (n == 1) return true
  }
  return false
}

console.log(isHappy(7))
// console.log(isHappy(2))
// console.log(isHappy(19))
