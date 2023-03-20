//https://leetcode.com/problems/can-place-flowers

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) return true
  if (flowerbed.length === 1)
    return n > 1 ? false : flowerbed[0] === 0 ? true : false

  for (let i = 0; i < flowerbed.length; i++) {
    const pref = flowerbed[i - 1]
    const curr = flowerbed[i]
    const next = flowerbed[i + 1]

    if (curr === 0) {
      const emptyLeft = pref === undefined || pref === 0
      const emptyRight = next === undefined || next === 0
      if (emptyLeft && emptyRight) {
        flowerbed[i] = 1
        n--
      }
    }

    if (n === 0) break
  }

  return n === 0
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
console.log(canPlaceFlowers([0, 1, 0, 0, 1], 1))
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1))
console.log(canPlaceFlowers([1, 0, 1, 0, 0], 1))
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([1, 0, 0, 0, 0], 3))
