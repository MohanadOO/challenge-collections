//https://leetcode.com/problems/richest-customer-wealth/
//Easy

function maximumWealth(accounts: number[][]): number {
  let maximum: number | undefined
  let temp = 0

  for (let i = 0; i < accounts.length; i++) {
    temp = accounts[i].reduce((a, b) => a + b, 0)
    if (typeof maximum === 'undefined') maximum = temp
    else if (temp > maximum) maximum = temp
  }

  return maximum
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
)
