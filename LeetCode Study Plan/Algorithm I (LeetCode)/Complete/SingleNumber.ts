//https://leetcode.com/problems/single-number/
//Easy

//My Solution
function singleNumber(nums: number[]): number {
  const uniqueList = []
  for (let i = 0; i < nums.length; i++) {
    if (uniqueList.includes(nums[i])) {
      uniqueList.splice(uniqueList.indexOf(nums[i]), 1)
      continue
    }

    uniqueList.push(nums[i])
  }
  return uniqueList[0]
}

// XOR Solution => https://leetcode.com/problems/single-number/discuss/42997/My-O(n)-solution-using-XOR
function singleNumber1(nums: number[]): number {
  if (nums.length < 1) return nums[0]

  let unique: number = 0
  for (let i = 0; i < nums.length; i++) {
    unique = unique ^ nums[i]
  }

  return unique
}

// console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
