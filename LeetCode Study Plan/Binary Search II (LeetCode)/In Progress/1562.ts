//https://leetcode.com/problems/find-latest-group-of-size-m/?envType=study-plan&id=binary-search-ii

//https://leetcode.com/problems/find-latest-group-of-size-m/solutions/814120/javascript-simple-108ms-49mb-100-100/
function findLatestStep(arr: number[], m: number): number {
  if (m === arr.length) return arr.length
  let bits = new Array(arr.length + 1).fill(true),
    pos: number,
    flag: boolean,
    i: number,
    j: number

  console.log(bits)
  for (i = arr.length - 1, bits[0] = false; i >= 0; i--) {
    ;(pos = arr[i]), (bits[pos] = false)
    for (j = 1, flag = true; flag && j <= m; j++) flag = bits[pos - j]
    if (flag && !bits[pos - m - 1]) return i
    for (j = 1, flag = true; flag && j <= m; j++) flag = bits[pos + j]
    if (flag && !bits[pos + m + 1]) return i
  }
  return -1
}

console.log(findLatestStep([3, 5, 1, 2, 4], 1))
