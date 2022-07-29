//https://leetcode.com/problems/number-of-1-bits/
//Easy

function hammingWeight(n: number, total = 0): number {
  if (n === 0) return 0
  const divideN = n / 2

  if (divideN === Math.ceil(divideN)) {
    return hammingWeight(divideN, total)
  } else if (divideN > 0) {
    if (divideN === 0.5) {
      total++
      return total
    }
    total++
    return hammingWeight(divideN - 0.5, total)
  }

  return total
}

console.log(hammingWeight(00000000000000000000000000001011))
console.log(hammingWeight(00000000000000000000000010000000))
console.log(hammingWeight(00000000000000000000000000000010))
console.log(hammingWeight(00000000000000000000000000000000))
