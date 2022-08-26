//https://leetcode.com/problems/climbing-stairs/
//Easy

function climbStairs(n: number): number {
  if (n == 1) return 1

  let oneStep = 1
  let twoStep = 2
  let third: number
  for (let i = 3; i <= n; i++) {
    third = oneStep + twoStep
    oneStep = twoStep
    twoStep = third
  }
  return twoStep
}

console.log(climbStairs(7))

/**
 * n = 4 => 5 Ways
 * 1 1 1 1
 * 1 1 2
 * 1 2 1
 * 2 1 1
 * 2 2
 */

/**
 * n = 5 => 8 Ways
 * 1 1 1 1 1
 * 1 1 1 2
 * 1 1 2 1
 * 1 2 1 1
 * 2 1 1 1
 * 1 2 1 1
 * 1 2 2
 * 2 2 1
 * 2 1 2
 */
