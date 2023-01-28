//https://leetcode.com/problems/data-stream-as-disjoint-intervals

class SummaryRanges {
  private list: boolean[]
  constructor() {
    this.list = []
  }

  addNum(num: number) {
    this.list[num] = true
  }

  getIntervals(): number[][] {
    const res: number[][] = []
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i]) {
        let temp = i
        while (this.list[temp]) temp++
        res.push([i, temp - 1])
        i = temp
      }
    }
    return res
  }
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */
const obj = new SummaryRanges()
console.log(obj)
obj.addNum(1)
console.log(obj.getIntervals())
obj.addNum(3)
console.log(obj.getIntervals())
obj.addNum(7)
console.log(obj.getIntervals())
obj.addNum(2)
console.log(obj.getIntervals())
obj.addNum(6)
console.log(obj.getIntervals())
console.log(obj)
