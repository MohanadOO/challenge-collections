//https://leetcode.com/problems/range-sum-query-immutable/
//Easy

class NumArray {
  private nums: number[]

  constructor(nums: number[]) {
    this.nums = nums
  }

  sumRange(left: number, right: number): number {
    let sum = 0;
    let i = left;

    while(i <= right){
        sum += this.nums[i]
        i++
    }
    return sum
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
const sumArray = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(sumArray.sumRange(0, 2))
console.log(sumArray.sumRange(2, 5))
console.log(sumArray.sumRange(0, 5))
