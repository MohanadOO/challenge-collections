//https://leetcode.com/problems/design-authentication-manager/description/?envType=study-plan&id=programming-skills-ii

class AuthenticationManager {
  private timeToLive: number
  private tokens: Map<string, { tokenId: string; endTime: number }>

  constructor(timeToLive: number) {
    this.timeToLive = timeToLive
    this.tokens = new Map()
  }

  generate(tokenId: string, currentTime: number): void {
    if (!this.tokens.has(tokenId)) {
      const tokenInfo = { tokenId, endTime: currentTime + this.timeToLive }
      this.tokens.set(tokenId, tokenInfo)
    }
  }

  renew(tokenId: string, currentTime: number): void {
    if (!this.tokens.has(tokenId)) return

    const token = this.tokens.get(tokenId)
    if (token !== undefined) {
      if (token.endTime > currentTime) {
        const tokenInfo = { tokenId, endTime: currentTime + this.timeToLive }
        this.tokens.set(tokenId, tokenInfo)
      } else this.tokens.delete(tokenId)
    }
  }

  countUnexpiredTokens(currentTime: number): number {
    let activeToken: number = 0
    for (let [key, token] of this.tokens.entries()) {
      if (token.endTime > currentTime) activeToken++
    }
    return activeToken
  }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */

const obj1 = new AuthenticationManager(5)
obj1.renew('aaa', 1)
obj1.generate('aaa', 2)
const param_1 = obj1.countUnexpiredTokens(5)
console.log(obj1)
console.log(param_1)

obj1.generate('bbb', 7)
obj1.renew('aaa', 8)
obj1.renew('bbb', 10)
console.log(obj1)
const param_2 = obj1.countUnexpiredTokens(15)
console.log(param_2)
