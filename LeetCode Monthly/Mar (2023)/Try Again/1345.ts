//https://leetcode.com/problems/jump-game-iv/

function minJumps(arr: number[]): number {
  const len = arr.length
  if (len < 2) return 0

  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    const val = map.get(arr[i])
    if (!val) map.set(arr[i], [i])
    else map.set(arr[i], [...val, i])
  }

  const visited: Set<number> = new Set()
  visited.add(0)
  visited.add(len - 1)
  let curs: Set<number> = new Set()
  curs.add(0)

  let step = 0

  let other: Set<number> = new Set()
  other.add(len - 1)

  while (curs.size > 0) {
    if (curs.size > other.size) {
      const temp = curs
      curs = other
      other = temp
    }
    const next: Set<number> = new Set()
    for (const node of curs) {
      const val = map.get(arr[node]) || []
      for (const child of val) {
        if (other.has(child)) return step + 1
        if (visited.has(child)) continue

        visited.add(child)
        next.add(child)
      }
      map.delete(arr[node])

      for (const child of [node - 1, node + 1]) {
        if (other.has(child)) return step + 1
        if (0 <= child && child < len && !visited.has(child)) {
          visited.add(child)
          next.add(child)
        }
      }
    }

    curs = next
    step++
  }

  return -1
}

function minJumpsBFS(arr: number[]): number {
  const len = arr.length - 1
  if (len < 1) return 0

  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) map.set(arr[i], [])
    map.get(arr[i]).push(i)
  }

  let visited: Set<number> = new Set()
  let step = 0
  let curr: Set<number> = new Set()
  curr.add(len)

  while (curr.size > 0) {
    let next: Set<number> = new Set()
    for (const node of curr.values()) {
      visited.add(node)

      if (node == 0) return step

      if (node > 0 && !visited.has(node - 1)) {
        if (node - 1 == 0) return ++step
        next.add(node - 1)
      }

      const jumps = map.get(arr[node])
      if (jumps) {
        map.delete(arr[node])
        let limit = 0
        for (const jumpIndex of jumps) {
          if (jumpIndex !== node && !visited.has(jumpIndex)) {
            limit++
            if (limit > 5) break
            if (jumpIndex == 0) return ++step
            next.add(jumpIndex)
          }
        }
      }

      if (node < len && !visited.has(node + 1)) {
        next.add(node + 1)
      }
    }
    curr = next
    step++
  }
  return step
}

console.log(minJumpsBFS([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]))
console.log(minJumpsBFS([7]))
console.log(minJumpsBFS([7, 6, 9, 6, 9, 6, 9, 7]))
