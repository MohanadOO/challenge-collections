//https://leetcode.com/problems/valid-triangle-number/?envType=study-plan&id=binary-search-ii

//a+b > c, b+c > a and a+c> b
function triangleNumber(nums: number[]): number {
  let left = 0,
    right = 0,
    result = 0

  while (left < nums.length - 2) {
    let a = nums[right]
    let bPos = right + 1

    while (bPos < nums.length) {
      let b = nums[bPos]
      let cPos = bPos + 1

      while (cPos < nums.length) {
        let c = nums[cPos]
        if (a + b > c && b + c > a && a + c > b) result++
        cPos++
      }
      bPos++
    }

    left++
    right = left
  }

  return result
}

console.log(triangleNumber([2, 2, 3, 4]))
console.log(triangleNumber([4, 2, 3, 4]))
