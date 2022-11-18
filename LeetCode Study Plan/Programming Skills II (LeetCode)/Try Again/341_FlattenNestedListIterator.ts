//https://leetcode.com/problems/flatten-nested-list-iterator/?envType=study-plan&id=programming-skills-ii

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

// Solution Here => https://leetcode.com/problems/flatten-nested-list-iterator/solutions/422191/clean-javascript-es6-generator-version/?envType=study-plan&id=programming-skills-ii&languageTags=javascript
class NestedIterator {
  private gen: any
  private nextVal: any

  constructor(nestedList: NestedInteger[]) {
    this.gen = this.listGenerator(nestedList)
    this.nextVal = this.gen.next()
  }

  hasNext(): boolean {
    return !this.nextVal.done
  }

  next(): number {
    const val = this.nextVal.value
    this.nextVal = this.gen.next()
    return val
  }

  *listGenerator(list) {
    for (const el of list) {
      if (el.isInteger()) yield el.getInteger()
      else yield* this.listGenerator(el.getList())
    }
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */

const obj = new NestedIterator([[1, 1], 2, [1, 1]])
const a: number[] = []
while (obj.hasNext()) a.push(obj.next())
