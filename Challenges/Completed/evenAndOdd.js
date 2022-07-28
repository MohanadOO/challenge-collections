function oddsVsEvens(num) {
  let even = 0
  let odd = 0
  const numString = num.toString()

  for (let i = 0; i < numString.length; i++) {
    console.log(numString[i])
    if (numString[i] % 2 == 0) {
      even = even + Number(numString[i])
    } else {
      odd = odd + Number(numString[i])
    }
  }

  return even === odd ? 'equal' : even > odd ? 'even' : 'odd'
}

console.log(oddsVsEvens(564))
