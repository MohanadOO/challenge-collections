//https://leetcode.com/problems/random-pick-with-weight/?envType=study-plan&id=binary-search-ii

class Solution {
  private map: Map<number, number>
  private sum: number
  private keys: number[]

  constructor(w: number[]) {
    this.map = new Map()
    this.sum = 0

    for (let i = 0; i < w.length; i++) {
      this.sum += w[i]
      this.map.set(this.sum, i)
    }
    this.keys = [...this.map.keys()]
  }

  pickIndex(): number {
    const random = Math.floor(Math.random() * this.sum)

    for (const key of this.keys) {
      const val = this.map.get(key)
      if (typeof val === 'number') {
        if (random < key) {
          return val
        }
      }
    }
    return random
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

const obj = new Solution([1, 3])
console.log(obj.pickIndex())
console.log(obj.pickIndex())
console.log(obj.pickIndex())
console.log(obj.pickIndex())
console.log(obj.pickIndex())
