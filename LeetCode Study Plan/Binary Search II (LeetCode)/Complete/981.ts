//https://leetcode.com/problems/time-based-key-value-store/?envType=study-plan&id=binary-search-ii

class TimeMap {
  private obj: object

  constructor() {
    this.obj = {}
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.obj[key]) this.obj[key] = [{ key, value, timestamp }]
    else this.obj[key].push({ key, value, timestamp })
  }
  get(key: string, timestamp: number): string {
    if (!this.obj[key]) return ''

    let value = ''
    let start = 0
    let end = this.obj[key].length - 1
    
    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2)
      const curr = this.obj[key][mid].timestamp
      if (curr <= timestamp) {
          start = mid + 1
          value = this.obj[key][mid].value
        } else {
            end = mid - 1
        }
    }

    return value
  }
}


/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

const time = new TimeMap()
time.set('love', 'low', 20)
time.set('love', 'high', 10)
console.log(time.get('love', 5))
console.log(time.get('love', 10))
console.log(time.get('love', 15))
console.log(time.get('love', 20))
console.log(time.get('love', 25))
