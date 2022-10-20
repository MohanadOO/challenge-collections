//https://leetcode.com/problems/integer-to-roman/
//Medium

/*
    Convert numbers to roman symbols.
*/

function intToRoman(num: number): string {
  const result: string[] = []
  if (num >= 1000) num = convert('M', 1000)
  if (num >= 900) num = convert('CM', 900)
  if (num >= 500) num = convert('D', 500)
  if (num >= 400) num = convert('CD', 400)
  if (num >= 100) num = convert('C', 100)
  if (num >= 90) num = convert('XC', 90)
  if (num >= 50) num = convert('L', 50)
  if (num >= 40) num = convert('XL', 40)
  if (num >= 10) num = convert('X', 10)
  if (num >= 9) num = convert('IX', 9)
  if (num >= 5) num = convert('V', 5)
  if (num >= 4) num = convert('IV', 4)
  if (num >= 1) num = convert('I', 1)

  function convert(symbol: string, value: number): number {
    result.push(symbol)
    if (num - value >= value) {
      num -= value
      return convert(symbol, value)
    }
    return num % value
  }
  return result.join('')
}

// console.log(intToRoman(3))
// console.log(intToRoman(58))
console.log(intToRoman(1994))
