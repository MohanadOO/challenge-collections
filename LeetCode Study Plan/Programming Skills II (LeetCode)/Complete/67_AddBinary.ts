//https://leetcode.com/problems/add-binary/
//Easy

function addBinary(a: string, b: string): string {
  let result = ''
  let carry = 0

  while (a || b || carry) {
    let sum = Number(a.slice(-1)) + Number(b.slice(-1)) + carry
    if (sum > 1) {
      result = (sum % 2) + result
      carry = 1
    } else {
      result = sum + result
      carry = 0
    }

    a = a.slice(0, a.length - 1)
    b = b.slice(0, b.length - 1)
  }
  return result
}

//BigInt() object takes a string integer literal as argument and then return us a number which is of the BigInt datatype.
// Binary => 0b , Octal => 0o, Hexadecimal => 0x
function addBinaryUsingBigInt(a: string, b: string): string {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
}

//This Method doest not pass the test since converting numbers can be bigger than 2^53-1 which is the maximum save integer in JavaScript that's why using BigInt() is the optimal solution.
function addBinaryUsingParseInt(a: string, b: string): string {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
}

console.log(addBinary('11', '1'))
console.log(addBinaryUsingBigInt('11', '1'))
console.log(addBinaryUsingParseInt('11', '1'))
