//https://leetcode.com/problems/snapshot-array/?envType=study-plan&id=binary-search-ii

//https://leetcode.com/problems/snapshot-array/solutions/433295/javascript-solution/?envType=study-plan&id=binary-search-ii&languageTags=javascript
class SnapshotArray {
  private hashMap: object
  private snapShot: number

  constructor(length: number) {
    this.hashMap = {}
    this.snapShot = 0
  }

  set(index: number, val: number) {
    let curr = this.snapShot + '-' + index
    this.hashMap[curr] = val
  }

  snap() {
    let currSnap = this.snapShot
    this.snapShot++
    return currSnap
  }

  get(index: number, snapShot: number) {
    while (snapShot >= 0) {
      let curr = snapShot + '-' + index
      if (curr in this.hashMap) {
        return this.hashMap[curr]
      }
      snapShot--
    }
    return 0
  }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

// const obj = new SnapshotArray(2)
// console.log(obj.set(0, 12))
// console.log(obj.snap())
// console.log(obj.snap())
// console.log(obj.get(1, 0))
// console.log(obj.get(1, 0))
// console.log(obj.snap())
// console.log(obj.snap())
// console.log(obj)

const obj2 = new SnapshotArray(4)
console.log(obj2.set(0, 8))
console.log(obj2.set(2, 5))
console.log(obj2.set(3, 2))
console.log(obj2.snap())
console.log(obj2.set(2, 20))
console.log(obj2.set(0, 14))
console.log(obj2.get(3, 0))
console.log(obj2.set(0, 9))
console.log(obj2)
