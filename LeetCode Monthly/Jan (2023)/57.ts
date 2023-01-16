//https://leetcode.com/problems/insert-interval

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let [start, end] = newInterval
  let left: number[][] = []
  let right: number[][] = []

  for (const interval of intervals){
    const [first, last] = interval
    
    if (last < start) left.push(interval)
    else if (first > end) right.push(interval)
    else {
        start = Math.min(start, first)
        end = Math.max(end, last)
    }
  }
  return [...left, [start, end], ...right]
}



console.log(insert([[1, 5]], [2, 7]))
console.log(insert([[1, 5]], [6, 8]))

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
)

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
)
