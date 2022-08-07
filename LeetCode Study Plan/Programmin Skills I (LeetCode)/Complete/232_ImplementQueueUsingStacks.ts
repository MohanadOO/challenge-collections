//https://leetcode.com/problems/implement-queue-using-stacks/
//Easy

class MyQueue {
  private stack: Array<number>

  constructor() {
    this.stack = []
  }

  push(x: number): void {
    this.stack.push(x)
  }

  pop(): number {
    const first = this.stack[0]
    this.stack.shift()
    return first
  }

  peek(): number {
    return this.stack[0]
  }

  empty(): boolean {
    return this.stack.length === 0
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const obj = new MyQueue()
let param_2 = obj.push(1)
console.log(param_2)
// let param_3 = obj.peek()
// let param_4 = obj.empty()
