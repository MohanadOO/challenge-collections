//https://leetcode.com/problems/design-linked-list/?envType=study-plan&id=programming-skills-ii

//Solution Here => https://leetcode.com/problems/design-linked-list/solutions/614840/javascript-100-faster-other-solutions/?languageTags=javascript
var Node = function (val) {
  this.val = val
  this.next = null
}

var MyLinkedList = function (head) {
  this.head = head
  this.tail = null
  this.size = 0
}

MyLinkedList.prototype.get = function (index) {
  if (index >= this.size || index < 0) return -1
  let idx = 0
  var current = this.head
  while (current) {
    if (idx === index) return current.val
    current = current.next
    idx++
  }
}

MyLinkedList.prototype.addAtHead = function (val) {
  var node = new Node(val)
  if (this.head) {
    node.next = this.head
    this.head = node
  } else {
    this.head = node
    this.tail = this.head
  }
  this.size++
}

MyLinkedList.prototype.addAtTail = function (val) {
  var node = new Node(val)
  if (this.tail) this.tail.next = node
  else this.head = node
  this.tail = node
  this.size++
}

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return
  if (index === this.size) {
    this.addAtTail(val)
    return
  }
  if (index === 0) {
    this.addAtHead(val)
    return
  }
  let idx = 0
  var current = this.head
  while (current) {
    if (idx === index - 1) {
      var node = new Node(val)
      node.next = current.next
      current.next = node
      this.size++
      return
    }
    current = current.next
    idx++
  }
}

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return
  if (index === 0) {
    this.head = this.head.next
    this.size--
    if (this.size === 0) this.tail = null
    return
  }
  let idx = 0
  var current = this.head
  while (current) {
    if (idx === index - 1) {
      current.next = current.next.next ? current.next.next : null
      if (!current.next) {
        this.tail = current
      }
      this.size--
      return
    }
    current = current.next
    idx++
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const obj1 = new MyLinkedList()

console.log(obj1.get(1))

obj1.addAtHead(1)
obj1.addAtTail(3)
obj1.addAtIndex(1, 2)
obj1.deleteAtIndex(1)

console.log(obj1.get(1))
