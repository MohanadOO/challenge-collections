export default function insertionSort(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i] // 3
    let j = i - 1 // 1

    while (j > -1 && curr < nums[j]) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = curr
  }

  return nums
}
