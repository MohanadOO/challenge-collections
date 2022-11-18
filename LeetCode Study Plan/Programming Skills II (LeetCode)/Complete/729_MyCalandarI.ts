//https://leetcode.com/problems/my-calendar-i/?envType=study-plan&id=programming-skills-ii

class MyCalendar {
  private start: number[]
  private end: number[]

  constructor() {
    this.start = []
    this.end = []
  }

  book(start: number, end: number): boolean {
    if (this.start.length === 0 && this.end.length === 0) {
      this.start.push(start)
      this.end.push(end)
      return true
    }

    for (let i = 0; i < this.start.length; i++) {
      if (start < this.end[i] && this.start[i] < end) return false
    }

    this.start.push(start)
    this.end.push(end)
    return true
  }
}

var obj = new MyCalendar()
var param_1 = obj.book(15, 20)
var param_2 = obj.book(15, 25)
var param_3 = obj.book(20, 30)

console.log(param_1, param_2, param_3)
