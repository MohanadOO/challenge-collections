//https://leetcode.com/problems/power-of-three/
//Easy

function isPowerOfThree(n: number): boolean {
  if (n === 0) return false

  for (let i = 0; i < n; i++) {
    if (n === Math.pow(3, i)) {
      return true
    } 
    else if (Math.pow(3, i) > n) {
      break
    }
  }
  return false
}

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(9))
