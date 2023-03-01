export default function mergeSort(nums: number[]): number[] {
  if (nums.length < 2) return nums

  const mid = Math.floor(nums.length / 2)
  const left = nums.splice(0, mid)

  return merge(mergeSort(left), mergeSort(nums))
}

function merge(left: number[], right: number[]): number[] {
  const arr: number[] = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift() as number)
    } else arr.push(right.shift() as number)
  }
  return [...arr, ...left, ...right]
}
