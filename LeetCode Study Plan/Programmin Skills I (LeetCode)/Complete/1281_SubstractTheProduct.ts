//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
//Easy

function subtractProductAndSum(n: number): number {
  const splitNum = n.toString().split('')
  let product = 1
  let sum = 0

  for (let i = 0; i < splitNum.length; i++) {
    product *= Number(splitNum[i])
    sum += Number(splitNum[i])
  }

  return product - sum
}

console.log(subtractProductAndSum(234))
// console.log(subtractProductAndSum(4421))
