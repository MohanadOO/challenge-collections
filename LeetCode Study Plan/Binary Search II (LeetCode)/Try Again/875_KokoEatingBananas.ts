//https://leetcode.com/problems/koko-eating-bananas/?envType=study-plan&id=binary-search-ii

//Solution => https://leetcode.com/problems/koko-eating-bananas/solutions/152370/javascript-binary-search/?envType=study-plan&id=binary-search-ii
function minEatingSpeed(piles: number[], h: number): number {
  let s = 1
  let e = piles.reduce((a, b) => a + b)

  while (s <= e) {
    const mid = s + Math.floor((e - s) / 2)

    const maxPerHour = piles.map((p) => Math.ceil(p / mid))
    const totalBananasPerHour = maxPerHour.reduce((a, b) => a + b)

    if (totalBananasPerHour <= h) e = mid - 1
    else s = mid + 1
  }

  return s
}

console.log(minEatingSpeed([3, 6, 7, 11], 8))
