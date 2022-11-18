//https://leetcode.com/problems/insert-delete-getrandom-o1/?envType=study-plan&id=programming-skills-ii

class RandomizedSet {
  private randomSet: object

  constructor() {
    this.randomSet = {}
  }

  insert(val: number): boolean {
    if (this.randomSet[val] === undefined) {
      this.randomSet[val] = val
      return true
    }
    return false
  }

  remove(val: number): boolean {
    if (this.randomSet[val] !== undefined) {
      delete this.randomSet[val]
      return true
    }
    return false
  }

  getRandom(): number {
    const values = Object.values(this.randomSet)
    const length = values.length
    return values[Math.floor(Math.random() * length)]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet()
var param_1 = obj.insert(1)
var param_2 = obj.remove(2)
var param_3 = obj.insert(2)
var param_4 = obj.getRandom()
var param_5 = obj.remove(1)
var param_6 = obj.insert(2)
var param_7 = obj.getRandom()

console.log(param_1)
console.log(param_2)
console.log(param_3)
console.log(param_4)
console.log(param_5)
console.log(param_6)
console.log(param_7)
