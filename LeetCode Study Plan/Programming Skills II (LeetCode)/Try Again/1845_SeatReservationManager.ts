//https://leetcode.com/problems/seat-reservation-manager/?envType=study-plan&id=programming-skills-ii

//Solution => https://leetcode.com/problems/seat-reservation-manager/solutions/1906804/javascript-solution-save-link-unreserve-800ms/
class SeatManager {
  private n: number
  private min: number
  private seat: number[]
  constructor(n: number) {
    this.min = 1
    this.seat = []
    this.n = n
  }

  reserve(): number {
    let res: number
    if (!this.seat[this.min]) {
      res = this.min
      this.min = this.n < this.min ? NaN : this.min + 1
    } else {
      res = this.min
      this.min = this.seat[this.min]
    }
    return res
  }

  unreserve(seatNumber: number): void {
    if (this.min < seatNumber) {
      let pre = this.min
      let next = this.seat[this.min]

      while (next < seatNumber) {
        pre = next
        next = this.seat[next]
      }

      const temp = this.seat[pre]
      this.seat[pre] = seatNumber
      this.seat[seatNumber] = temp
    } else {
      let temp = this.min
      this.min = seatNumber
      this.seat[seatNumber] = temp
    }
  }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

const obj = new SeatManager(5)
const reserve1 = obj.reserve()
const reserve2 = obj.reserve()
const reserve3 = obj.reserve()
const reserve4 = obj.reserve()
const reserve5 = obj.reserve()
const unreserve1 = obj.unreserve(1)
const unreserve2 = obj.unreserve(7)

console.log(obj)
console.log(reserve1)
console.log(reserve2)
console.log(reserve3)
