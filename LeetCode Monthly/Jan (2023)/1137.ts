//https://leetcode.com/problems/n-th-tribonacci-number

function tribonacci(n: number): number {
  // return tribonacciIterative(n)
  return tribonacciRecursive(n)
}

function tribonacciIterative(n: number): number {
  const sequence = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    sequence[i] = sequence[i - 3] + sequence[i - 2] + sequence[i - 1]
  }
  return sequence[n]
}

const seq = [0, 1, 1]
function tribonacciRecursive(n: number): number {
  if (seq[n] !== undefined) return seq[n]
  return (seq[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3))
}

// console.log(tribonacci(0))
console.log(tribonacci(4))
// console.log(tribonacci(5))
// console.log(tribonacci(25))
