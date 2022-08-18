//https://leetcode.com/problems/daily-temperatures/
//Medium

function dailyTemperatures(temperatures: number[]): number[] {
  let i = 0
  let result: number[] = new Array(temperatures.length).fill(0)

  while (i < temperatures.length) {
    result[i] = checkTemperature(i)
    i++
  }
  function checkTemperature(index: number): number {
    for (let j = index + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[index]) return j - index
    }
    return 0
  }
  
  return result
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(dailyTemperatures([30, 40, 50, 60]))
