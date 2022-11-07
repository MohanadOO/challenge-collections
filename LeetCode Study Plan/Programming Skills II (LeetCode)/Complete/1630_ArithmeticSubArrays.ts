//https://leetcode.com/problems/arithmetic-subarrays/
//Medium

function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[]
): boolean[] {
  const result: boolean[] = []

  for (let i = 0; i < l.length; i++) {
    const sortArithmetic = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b)
    const len = sortArithmetic.length
    let pattern: number = sortArithmetic[1] - sortArithmetic[0]

    for (let j = 2; j < len; j++) {
      if (sortArithmetic[j] - sortArithmetic[j - 1] !== pattern) {
        result.push(false)
        break
      }
    }
    if (result[i] === undefined || len <= 2) result.push(true) 
  }

  return result
}

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]))
console.log(
  checkArithmeticSubarrays(
    [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
    [0, 1, 6, 4, 8, 7],
    [4, 4, 9, 7, 9, 10]
  )
)
