//https://leetcode.com/problems/find-k-closest-elements/?envType=study-plan&id=binary-search-ii

function findClosestElements(arr: number[], k: number, x: number): number[] {
  //   return findClosestElementsBinarySearch(arr, k, x)
  return findClosestElementsEasy(arr, k, x)
}

function findClosestElementsBinarySearch(
  arr: number[],
  k: number,
  x: number
): number[] {
  const len = arr.length

  if (x < arr[0]) return arr.splice(0, k)
  if (arr[len - 1] < x) return arr.splice(len - k, k)

  let s = 0
  let e = len - 1

  while (s + 1 < e) {
    const mid = s + Math.floor((e - s) / 2)
    if (arr[mid] === x) s = mid
    else if (arr[mid] < x) s = mid
    else e = mid
  }

  if (arr[e] === x) s = e

  e = Math.min(len - 1, s + k - 1)
  s = Math.max(0, s - k - 1)

  while (s + k - 1 < e) {
    if (x - arr[s] <= arr[e] - x) e--
    else s++
  }

  return arr.slice(s, e + 1)
}

function findClosestElementsEasy(
  arr: number[],
  k: number,
  x: number
): number[] {
  return arr
    .map((val, i) => ({
      value: val - x < x ? Math.abs(val - x) : Math.abs(val - x) + 0.5,
      index: i,
    }))
    .sort((l, r) => l.value - r.value)
    .slice(0, k)
    .map((val) => arr[val.index])
    .sort((l, r) => l - r)
}

// console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3))
console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9))
