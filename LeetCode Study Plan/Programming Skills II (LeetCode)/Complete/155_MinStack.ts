//https://leetcode.com/problems/min-stack/?envType=study-plan&id=programming-skills-ii

class MinStack {
  private stack: number[]
  private min: number[]

  constructor() {
    this.min = []
    this.stack = []
  }

  push(val: number): void {
    this.stack.push(val)
    if (this.min.length === 0 || val <= this.min[this.min.length - 1]){
        this.min.push(val)
    }
  }

  pop(): void {
    const x = this.stack.pop()
    if (x === this.min[this.min.length - 1]){
        this.min.pop()
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.min[this.min.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
obj.getMin()
obj.pop()
obj.top()
