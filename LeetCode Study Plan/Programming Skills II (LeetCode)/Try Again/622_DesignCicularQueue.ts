//https://leetcode.com/problems/design-circular-queue/?envType=study-plan&id=programming-skills-ii

class MyCircularQueue {
  private element: number[]
  private size: number
  private front: number
  private rear: number
  private length: number

  constructor(k: number) {
    this.element = []
    this.size = k
    this.front = 0
    this.rear = -1
    this.length = 0
  }

  enQueue(value: number): boolean {
    if (this.length >= this.size) return false

    this.rear++
    this.element[this.rear % this.size] = value
    this.length++
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false

    delete this.element[this.front % this.size]
    this.front++
    this.length--
    return true
  }

  Front(): number {
    if (this.isEmpty()) return -1
    return this.element[this.front % this.size]
  }

  Rear(): number {
    if (this.isEmpty()) return -1
    return this.element[this.rear % this.size]
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  isFull(): boolean {
    return this.length === this.size
  }
}

var obj = new MyCircularQueue(3)
var a = obj.enQueue(1)
var b = obj.enQueue(2)
var c = obj.enQueue(3)
var d = obj.enQueue(4)
var e = obj.Rear()
var f = obj.isFull()
var g = obj.deQueue()
var h = obj.enQueue(4)
var i = obj.Rear()
var j = obj.isEmpty()

console.log(a, b, c, d, e, f, g, h, i, j)
