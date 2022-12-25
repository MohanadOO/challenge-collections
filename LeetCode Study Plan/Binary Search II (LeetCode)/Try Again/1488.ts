//https://leetcode.com/problems/avoid-flood-in-the-city/?envType=study-plan&id=binary-search-ii

// Solution => https://leetcode.com/problems/avoid-flood-in-the-city/solutions/699431/javascript-binary-search-solution-with-brief-comments/?envType=study-plan&id=binary-search-ii&languageTags=javascript
function avoidFlood(rains: number[]): number[] {
  const ans = new Array(rains.length).fill(-1)

  let empty: number[] = []
  let map = new Map()

  for (let i = 0; i < rains.length; i++) {
    if (rains[i] > 0) {
      if (map.has(rains[i])) {
        let it = binarySearch(empty, map.get(rains[i]))
        if (it[0] === -1) return []
        ans[it[0]] = rains[i]
        empty.splice(it[1], 1)
      }
      map.set(rains[i], i)
    } else empty.push(i)
  }

  for (let i = 0; i < rains.length; ++i) {
    if (rains[i] === 0 && ans[i] < 0) ans[i] = 1
  }

  return ans

  function binarySearch(arr: number[], target: number): number[] {
    let start = 0
    let end = arr.length - 1

    while (start + 1 < end) {
      const mid = start + Math.floor((end - start) / 2)
      if (arr[mid] >= target) end = mid
      else start = mid
    }
    if (arr[start] >= target) return [arr[start], start]
    if (arr[end] >= target) return [arr[end], end]
    return [-1, -1]
  }
}

console.log(avoidFlood([1, 2, 3, 4]))
console.log(avoidFlood([1, 2, 0, 0, 2, 1]))
