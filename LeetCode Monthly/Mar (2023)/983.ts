//https://leetcode.com/problems/minimum-cost-for-tickets

//Solution => https://leetcode.com/problems/minimum-cost-for-tickets/solutions/810749/python-js-go-c-by-dp-w-visualization
function mincostTickets(days: number[], costs: number[]): number {
  const travelDays = new Set(days)
  let lastTravelDay = days[days.length - 1]
  const oneDay = costs[0]
  const sevenDays = costs[1]
  const thirtyDays = costs[2]

  const dpCost = new Array(lastTravelDay + 1).fill(0)

  for (let i = 1; i <= lastTravelDay; i++) {
    if (!travelDays.has(i)) {
      dpCost[i] = dpCost[i - 1]
      continue
    }

    const oneDayCost = dpCost[i - 1] + oneDay
    const sevenDaysCost = dpCost[Math.max(i - 7, 0)] + sevenDays
    const thirtyDaysCost = dpCost[Math.max(i - 30, 0)] + thirtyDays
    dpCost[i] = Math.min(oneDayCost, sevenDaysCost, thirtyDaysCost)
}
  return dpCost[lastTravelDay]
}

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]))
