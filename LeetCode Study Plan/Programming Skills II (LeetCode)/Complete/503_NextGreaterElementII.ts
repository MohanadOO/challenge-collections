//https://leetcode.com/problems/next-greater-element-ii/
//Medium

function nextGreaterElements(nums: number[]): number[] {
  const len = nums.length
  let result: number[] = []
  let i = 0
  while (i < nums.length) {
    for (let j = i + 1; j < len; j++) {
      if (nums[j] > nums[i]) {
        result.push(nums[j])
        break
    }
}
    if (result.length === i) {
      result.push(-1)
      for (let x = 0; x < i; x++) {
        if (nums[x] > nums[i]) {
          result.pop()
          result.push(nums[x])
          break
        }
      }
    }
    i++
  }

  return result
}

console.log(nextGreaterElements([1, 2, 1]))
console.log(nextGreaterElements([1, 2, 3, 4, 3]))
console.log(nextGreaterElements([5, 4, 3, 2, 1]))
