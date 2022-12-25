//https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/?envType=study-plan&id=binary-search-ii

function findBestValue(arr: number[], target: number): number {
  // return findBestValueBinarySearch(arr, target)
  return findBestValueLoop(arr, target)
}

function findBestValueBinarySearch(arr: number[], target: number): number {
  arr.sort((a, b) => a - b)

  let low = arr[0]
  let high = target

  let sum = 0
  let preSum = 0

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2)

    let start = 0
    let end = arr.length
    let range = 0

    while (start < end) {
      const midArr = start + Math.floor((end - start) / 2)

      if (arr[midArr] === mid) {
        range = midArr
        break
      }
      if (arr[midArr] >= mid) end = midArr - 1
      else {
        start = midArr + 1
        range = midArr
      }
    }
    for (let i = 0; i < range; i++) {
      if (arr[i] <= mid) sum += mid
    }

    if (sum >= target) low = mid + 1
    else {
      high = mid - 1
      preSum = sum
    }
    sum = 0
  }

  return sum
}

// Solution => https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/1121369/javascript-solution-no-binary-search/?envType=study-plan&id=binary-search-ii&languageTags=javascript
function findBestValueLoop(arr: number[], target: number): number {
  arr.sort((a, b) => a - b)
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    const range = arr.length - i
    const curr = arr[i]

    if (sum + curr * range > target) {
      return Math.ceil((target - sum) / range - 0.5)
    }
    sum += curr
  }

  return arr[arr.length - 1]
}

console.log(findBestValue([4, 9, 3], 10))
// console.log(findBestValue([2, 3, 5], 10))
// console.log(findBestValue([60864, 25176, 27249, 21296, 20204], 56803))
