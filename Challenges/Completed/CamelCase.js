//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

function camelCase(n) {
  return n
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('')
}

const result = camelCase('camel case')
console.log(result)

String.prototype.camelCase = function () {
  if (this.length === 0) {
    return ''
  }
  return this.trim('')
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('')
}

const result1 = ' CamelCase'.camelCase()

console.log(result1)
