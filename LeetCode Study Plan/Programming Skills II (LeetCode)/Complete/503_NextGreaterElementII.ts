//https://leetcode.com/problems/next-greater-element-ii/
//Medium

function nextGreaterElements(nums: number[]): number[]{
  // return nextGreaterElementsIterative(nums)
  return nextGreaterElementsStack(nums)
}


function nextGreaterElementsIterative(nums: number[]): number[] {
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
    if (result[i] === undefined) {
      for (let x = 0; x < i; x++) {
        if (nums[x] > nums[i]) {
          result.push(nums[x])
          break
        }
      }
    }
    if (result[i] === undefined) result.push(-1)
    i++
  }

  return result
}

function nextGreaterElementsStack(nums: number[]): number[] {
  const len = nums.length;
  const stack: number[] = []
  const result: number[] = []

  for (let i = len - 1; i >= 0; i--){
    while(stack.length !== 0 && nums[i] >= stack[stack.length - 1]) stack.pop()
    if (stack.length !== 0) {
      result[i] = stack[stack.length - 1]
      stack.push(nums[i])
      continue
    }
    else if (stack.length === 0){
      stack.push(nums[i])
      result[i] = -1
    } 
  }

  for (let i = len - 1; i >= 0; i--){
    while(stack.length !== 0 && nums[i] >= stack[stack.length - 1]) stack.pop()
    if (stack.length !== 0) {
      result[i] = stack[stack.length - 1]
      stack.push(nums[i])
      continue
    }
    else if (stack.length === 0){
      stack.push(nums[i])
      result[i] = -1
    } 
  }
  
  return result
}

console.log(nextGreaterElements([1, 2, 1]))
console.log(nextGreaterElements([1, 5, 3, 6, 8]))
console.log(nextGreaterElements([1, 2, 3, 4, 3]))
console.log(nextGreaterElements([5, 4, 3, 2, 1]))
