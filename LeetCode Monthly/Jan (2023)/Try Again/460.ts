//https://leetcode.com/problems/lfu-cache

class LFUCacheAttempt {
  private cache: number[]
  private counter: Map<number, number>
  private frequency: number[]
  private length: number
  private capacity: number

  constructor(capacity: number) {
    this.cache = new Array()
    this.counter = new Map()
    this.frequency = new Array()
    this.length = 0
    this.capacity = capacity
  }

  get(key: number): number {
    if (this.cache[key] === undefined) return -1
    this.increaseCounter(key)
    this.updateFrequency(key)
    return this.cache[key]
  }

  put(key: number, value: number): void {
    if (this.capacity === 0) return
    if (this.cache[key]) {
      this.cache[key] = value
      this.increaseCounter(key)
      this.updateFrequency(key)
      return
    }
    if (this.length !== this.capacity) {
      this.cache[key] = value
      this.counter.set(key, 1)
      this.length++
      return
    }

    //If the cache is full and we need to replace a value
    this.deleteFromCache(key, value)
  }

  increaseCounter(key: number) {
    const currCount = this.counter.get(key) as number
    this.counter.set(key, currCount + 1)
  }

  deleteFromCache(key: number, value: number) {
    let currCount = 0
    let remove = 0

    for (const [key, count] of this.counter) {
      if (currCount === 0 && remove === 0) {
        currCount = count
        remove = key
      } else if (currCount > count) {
        currCount = count
        remove = key
      } else if (currCount === count) {
        if (this.frequency.length < 1) continue
        remove = this.updateFrequency(key, count)
      }
    }
    delete this.cache[remove]
    this.counter.delete(remove)

    this.cache[key] = value
    this.counter.set(key, 1)
  }

  updateFrequency(key: number, count: number | undefined = undefined): number {
    const len = this.frequency.length - 1
    if (this.frequency.length === this.capacity) {
      if (count !== undefined) {
        let last: null | number = null
        for (let i = len; i >= 0; i--) {
          const counterKey = this.frequency[i]
          if (this.counter.get(counterKey) === count) last = counterKey
        }

        if (last !== null) return last
      }

      this.frequency[len] = key
      return this.frequency[len]
    }

    this.frequency.push(key)
    return this.frequency[len === -1 ? 0 : len]
  }
}

class LFUCache {
  private keyToFreqMap: Map<number, number>
  private freqToKeyMap: Map<number, number>
  private keyToValMap: Map<number, number>
  private capacity: number
  private leastFreq: number

  constructor(capacity: number) {
    this.keyToFreqMap = new Map()
    this.freqToKeyMap = new Map()
    this.keyToValMap = new Map()
    this.capacity = capacity
    this.leastFreq = 0
  }

  get(key: number): number {
    if (this.keyToValMap.has(key)) {
      this.leastFreq = freqAddOne(
        this.keyToFreqMap,
        this.freqToKeyMap,
        key,
        this.leastFreq
      )
      return this.keyToValMap.get(key) as number
    } else {
      return -1
    }
  }

  put(key: number, value: number) {
    if (this.capacity > 0) {
      // pop out least frequency used
      if (
        this.keyToValMap.size >= this.capacity &&
        !this.keyToValMap.has(key)
      ) {
        // Step 1: figure which one is the least frequenty used
        const leastFreqSet: any = this.freqToKeyMap.get(this.leastFreq)
        // Since set is inserted according insertion order, the head of the set must be the least recently used item
        const leastUsedKey = leastFreqSet.values().next().value

        // remove it from all our maps
        leastFreqSet.delete(leastUsedKey)
        if (leastFreqSet.size === 0) {
          this.freqToKeyMap.delete(this.leastFreq)
          // Since the last entry on the leastFreq set is removed, so the next leastFreq will be +1 from current
          this.leastFreq++
        }
        this.keyToFreqMap.delete(leastUsedKey)
        this.keyToValMap.delete(leastUsedKey)
      }
      // We haven't seen this before, so leastFreq will be set back to 1
      if (!this.keyToValMap.has(key)) {
        this.leastFreq = 1
      }
      // update our leastFreq count
      this.leastFreq = freqAddOne(
        this.keyToFreqMap,
        this.freqToKeyMap,
        key,
        this.leastFreq
      )
      this.keyToValMap.set(key, value)
    }
  }
}

function freqAddOne(
  keyToFreqMap: Map<number, any>,
  freqToKeyMap: Map<number, any>,
  key: number,
  leastFreq: number
) {
  // Add this key to our cache
  // update keyToFreqMap
  const freq = keyToFreqMap.get(key) + 1 || 1
  keyToFreqMap.set(key, freq)

  // update freqToKeyMap
  if (freq > 1) {
    const oldFreq = freq - 1
    const oldFreqSet = freqToKeyMap.get(oldFreq)
    oldFreqSet.delete(key)
    if (oldFreqSet.size === 0) {
      freqToKeyMap.delete(oldFreq)
      if (oldFreq === leastFreq) leastFreq++
    }
  }
  const set = freqToKeyMap.get(freq) || new Set()
  set.add(key)
  freqToKeyMap.set(freq, set)
  return leastFreq
}

const lfu = new LFUCache(3)
lfu.put(1, 1)
lfu.put(2, 2)
lfu.put(3, 3)
lfu.put(4, 4)
console.log(lfu.get(4))
console.log(lfu.get(3))
console.log(lfu.get(2))
console.log(lfu.get(1))
lfu.put(5, 5)
console.log(lfu.get(1))
console.log(lfu.get(2))
console.log(lfu.get(3))
console.log(lfu.get(4))
console.log(lfu.get(5))

console.log(lfu)
