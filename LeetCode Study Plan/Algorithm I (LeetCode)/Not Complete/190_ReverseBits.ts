//https://leetcode.com/problems/reverse-bits/
//Easy

function reverseBits(n: number): number {
  if (n === 0) return 0

  let result = 0
  for (let i = 0; i < 32; i++) {
    result = result << 1
    if ((n & 1) === 1) result++
    n = n >> 1
  }

  return result
}

console.log(reverseBits(00000010100101000001111010011100))
console.log(reverseBits(00000000000000000000000000000100))
console.log(reverseBits(00000000000000000000000000000100))

/**
 * Initialize Result to be 0
 * loop for the 32 bit
 * Shift result to the left by 1
 * if the last bit of n is 1 result = result + 1
 * Shift n to the right by 1
 * Example 👇
 *
 * Let's Say the input is 👇
 * 00000010100101000001111010011100 => Input
 * 00000000000000000000000000000000 => Result
 * result = 0
 *
 * i = 0
 * 00000000000000000000000000000000 => Shift Result to left by one
 * 00000001010010100000111101001110 => Shift Input to Right by one
 *
 * i = 1
 * 00000000000000000000000000000000 => Shift Result to left by one
 * 00000000101001010000011110100111 => Shift Input to Right by one
 *
 * i = 2
 * 00000000000000000000000000000000 => Shift Result to left by one
 * Since Input last bit = 1 then Result increase by 1 👇
 * 00000000000000000000000000000001 => Result
 * 00000000010100101000001111010011 => Shift Input to Right by one
 *
 * i = 3
 * 00000000000000000000000000000010 => Shift Result to left by one
 * Since Input last bit = 1 then Result increase by 1 👇
 * 00000000000000000000000000000011 => Result
 * 00000000001010010100000111101001 => Shift Input to Right by one
 *
 * i = 4
 * 00000000000000000000000000000110 => Shift Result to left by one
 * Since Input last bit = 1 then Result increase by 1 👇
 * 00000000000000000000000000000111 => Result
 * 00000000000101001010000011110100 => Shift Input to Right by one
 *
 * i = 5
 * 00000000000000000000000000001110 => Shift Result to left by one
 * 00000000000010100101000001111010 => Shift Input to Right by one
 *
 * i = 6
 * 00000000000000000000000000011100 => Shift Result to left by one
 * 00000000000010100101000001111010 => Shift Input to Right by one
 *
 *
 * ...i = 32
 * 00111001011110000010100101000000 => Shift Result to left by one
 * 00000000000010100101000001111010 => Shift Input to Right by one
 */
