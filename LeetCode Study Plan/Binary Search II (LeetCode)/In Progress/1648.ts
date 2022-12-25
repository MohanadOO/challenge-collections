//https://leetcode.com/problems/sell-diminishing-valued-colored-balls/?envType=study-plan&id=binary-search-ii

//https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/928851/javascript-drawing-detailed-explanation-examples/?envType=study-plan&id=binary-search-ii&languageTags=javascript
function maxProfit(inventory: number[], orders: number): number {
  //rangeSum Formula
  let rangesum = (i: bigint | number, j: bigint | number) => {
    ;(i = BigInt(i)), (j = BigInt(j))
    return (j * (j + 1n)) / 2n - (i * (i + 1n)) / 2n
  }

  inventory.unshift(0) //prepend the sentinel 0
  inventory.sort((a, b) => a - b)
  let n = inventory.length,
    result = 0n,
    mod = BigInt(1e9 + 7),
    i = n - 1

  // can use all current levels
  while (orders >= (n - i) * (inventory[i] - inventory[i - 1]) && i > 0) {
    if (inventory[i] != inventory[i - 1])
      (result =
        (result + rangesum(inventory[i - 1], inventory[i]) * BigInt(n - i)) %
        mod),
        (orders -= (n - i) * (inventory[i] - inventory[i - 1]))
    i--
  }
  //can use some of the current levels
  if (orders > 0 && orders >= n - i) {
    let levels = Math.floor(orders / (n - i)) //the levels i can use
    result =
      (result + BigInt(n - i) * rangesum(inventory[i] - levels, inventory[i])) %
      mod
    orders -= levels * (n - i)
    inventory[i] -= levels
  }
  // can use some of the items OF the first level
  if (orders > 0 && orders < n - i)
    result = (result + BigInt(orders) * BigInt(inventory[i])) % mod
  return Number(result)
}

console.log(maxProfit([2, 5], 4))
