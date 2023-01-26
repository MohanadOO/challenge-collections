//https://leetcode.com/problems/cheapest-flights-within-k-stops

/*
    * Find the cheapest path from src to dst with at most (k) stops.
    n => Number of cities
    flights => List of flights where flight[i] = [from, to, price]
    src => Start Position
    dst => End Position
    k => Number of stops allowed
*/

function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const arg = [n, flights, src, dst, k]
  //   return findCheapestPriceAttempt(...arg)
  return findCheapestPriceSol(...arg)
}

function findCheapestPriceAttempt(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const map = new Map()
  for (let i = 0; i < flights.length; i++) {
    const [from, to, price] = flights[i]
    if (!map.has(from)) map.set(from, [[to, price]])
    else map.set(from, [...map.get(from), [to, price]])
  }

  const visit = new Map()
  let minPrice = search(src, dst, 0, 0, Infinity)

  function search(
    src: number,
    dst: number,
    totalPrice: number,
    stops: number,
    min: number
  ): number {
    if (stops > k) return Infinity
    if (src === dst) return totalPrice
    if (visit.has(`${src}-${dst}`)) {
      return visit.get(`${src}-${dst}`)
    }

    const dstList = map.get(src)
    if (totalPrice > min || !dstList) return min

    for (const [to, price] of dstList) {
      const total = totalPrice + price
      if (to === dst) min = Math.min(min, total)
      else if (visit.has(`${src}-${to}`)) {
        min = Math.min(min, visit.get(`${src}-${to}`) + total)
      } else min = Math.min(min, search(to, dst, total, stops + 1, min))
    }
    if (!visit.has(`${src}-${dst}`)) visit.set(`${src}-${dst}`, min)
    return min
  }

  return minPrice === Infinity ? -1 : minPrice
}

// Solution => https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/690994/javascript-clean-dijkstra-s-algorithm/
function findCheapestPriceSol(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const adjacencyList = new Map()

  for (let [start, end, cost] of flights) {
    if (adjacencyList.has(start)) adjacencyList.get(start).push([end, cost])
    else adjacencyList.set(start, [[end, cost]])
  }

  const queue = [[0, src, k + 1]]
  const visited = new Map()

  while (queue.length) {
    queue.sort((a, b) => a[0] - b[0])

    const [cost, city, stops] = queue.shift() as [number, number, number]
    visited.set(city, stops)

    if (city === dst) return cost
    if (stops <= 0 || !adjacencyList.has(city)) continue

    for (let [nextCity, nextCost] of adjacencyList.get(city)) {
      if (visited.has(nextCity) && visited.get(nextCity) >= stops - 1) continue
      queue.push([cost + nextCost, nextCity, stops - 1])
    }
  }
  return -1
}

console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    1
  )
)
console.log(
  findCheapestPrice(
    5,
    [
      [4, 1, 1],
      [1, 2, 3],
      [0, 3, 2],
      [0, 4, 10],
      [3, 1, 1],
      [1, 4, 3],
    ],
    2,
    1,
    1
  )
)
console.log(
  findCheapestPrice(
    5,
    [
      [0, 1, 5],
      [1, 2, 5],
      [0, 3, 2],
      [3, 1, 2],
      [1, 4, 1],
      [4, 2, 1],
    ],
    0,
    2,
    2
  )
)
console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1
  )
)
