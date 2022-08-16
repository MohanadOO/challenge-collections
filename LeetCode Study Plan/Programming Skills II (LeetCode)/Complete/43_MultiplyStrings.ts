//https://leetcode.com/problems/multiply-strings/
//Medium

//Solution => https://leetcode.com/problems/multiply-strings/discuss/1263988/Compute-Backwards-99-Faster-DP-Javascript-Complexity%3A-O(n%2Bm)
function multiply(num1: string, num2: string): string {
  const dp = [...Array(num1.length + num2.length)].fill(0)
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const prevReminder = dp[i + j + 1]
      const product = Number(num1[i]) * Number(num2[j]) + prevReminder
      const unitsDigit = product % 10
      const carryOver = Math.floor(product / 10)

      dp[i + j + 1] = unitsDigit
      dp[i + j] += carryOver
    }
  }
  let idx = 0
  while (dp[idx] === 0) dp.shift()
  if (!dp.length) return '0'
  return dp.join('')
}

// console.log(multiply('2', '3'))
console.log(multiply('123', '456'))
