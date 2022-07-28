//https://leetcode.com/problems/power-of-two/
//Easy

// n == 2 ^ x
function isPowerOfTwo(n: number): boolean {
  //O(n)
  for (let i = -2; i < n; i++) {
    if (n === Math.pow(2, i)) {
      return true
    }
    if (n < Math.pow(2, i)) {
      break
    }
  }
  return false
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(0))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(67108864))
