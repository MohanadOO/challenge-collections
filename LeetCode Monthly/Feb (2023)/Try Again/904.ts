//https://leetcode.com/problems/fruit-into-baskets

function totalFruit(fruits: number[]): number {
  return SlidingWindow(fruits)
  return Attempt(fruits)
}

function SlidingWindow(fruits: number[]): number {
  const basket = new Map<number, number>()

  let max = 0
  let left = 0

  for (let right = 0; right < fruits.length; right++) {
    const fruit = fruits[right]
    const val = basket.get(fruit)

    if (!val) basket.set(fruit, 1)
    else basket.set(fruit, val + 1)

    while (basket.size > 2) {
      const prevFruit = fruits[left]
      const prevVal = basket.get(prevFruit)
      if (prevVal !== undefined) {
        basket.set(prevFruit, prevVal - 1)
      }
      if (basket.get(prevFruit) === 0) basket.delete(prevFruit)
      left++
    }

    max = Math.max(max, right - left + 1)
  }

  return max
}

function Attempt(fruits: number[]): number {
  if (fruits.length === 0) return 0
  if (fruits.length === 1) return 1

  let max = 0

  let basket = new Map<number, number>()

  let left = 0
  let right = 0
  let first: undefined | number[] = undefined

  while (right < fruits.length) {
    const fruit = fruits[right]
    const val = basket.get(fruit)

    if (basket.size === 2 && !val) {
      if (first !== undefined) {
        basket.delete(first[0])
        left = first[1] + 1
        for (let [fruit, val] of basket) {
          first = [fruit, right - 1]
        }
      }
    }

    if (first === undefined) first = [fruit, right]
    if (first[0] === fruit) first[1] = right

    if (!val) {
      basket.set(fruit, 1)
    } else basket.set(fruit, val + 1)

    max = Math.max(max, right - left + 1)

    right++
  }

  return max
}

console.log(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3]))
console.log(totalFruit([1, 0, 3, 4, 3]))
console.log(totalFruit([1, 1]))
console.log(totalFruit([0, 1]))
console.log(totalFruit([1, 2, 1]))
console.log(totalFruit([0, 1, 2, 2]))
console.log(totalFruit([1, 2, 3, 2, 2]))
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]))
