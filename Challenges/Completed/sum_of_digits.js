// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  const splitNumber = n.toString().split('')

  const sum = splitNumber.reduce((prev, curr) => {
    return parseInt(prev) + parseInt(curr)
  })

  if (sum.toString().length === 1) return parseInt(sum)
  else return digital_root(sum)
}

const results = digital_root(456)
console.log(results)

//400IQ solution 
console.log(((456 - 1) % 9) + 1)
