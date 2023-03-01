export default function selectionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    let min = i
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) min = j
    }
    nums[i] = nums[min]
    nums[min] = curr
  }

  return nums
}
