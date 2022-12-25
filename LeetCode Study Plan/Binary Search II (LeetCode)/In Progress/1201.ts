//https://leetcode.com/problems/ugly-number-iii/?envType=study-plan&id=binary-search-ii

//https://leetcode.com/problems/ugly-number-iii/solutions/2884326/javascript/
function nthUglyNumber(n: number, a: number, b: number, c: number): number {
  let left = 1
  let right = Math.pow(10, 10)

  const feasible = (num: number) => {
    let total =
      Math.floor(num / a) +
      Math.floor(num / b) +
      Math.floor(num / c) -
      Math.floor(num / ab) -
      Math.floor(num / ac) -
      Math.floor(num / bc) +
      Math.floor(num / abc)

    return total >= n
  }

  const gcd = (a: number, b: number) => (b == 0 ? a : gcd(b, a % b))

  let ab = Math.floor((a * b) / gcd(a, b))
  let bc = Math.floor((b * c) / gcd(b, c))
  let ac = Math.floor((a * c) / gcd(a, c))
  let abc = Math.floor((a * bc) / gcd(a, bc))

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2)

    if (feasible(mid)) right = mid
    else left = mid + 1
  }

  return left
}

console.log(nthUglyNumber(3, 2, 3, 5))
