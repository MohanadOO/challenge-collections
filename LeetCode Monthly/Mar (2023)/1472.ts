//https://leetcode.com/problems/design-browser-history

class BrowserHistory {
  private current: string
  private backHistory: string[]
  private forwardHistory: string[]

  constructor(homepage: string) {
    this.current = homepage
    this.backHistory = []
    this.forwardHistory = []
  }

  visit(url: string): void {
    this.backHistory.push(this.current)
    this.forwardHistory = []
    this.current = url
  }

  back(steps: number): string {
    while (steps > 0 && this.backHistory.length > 0) {
      this.forwardHistory.push(this.current)
      this.current = this.backHistory.pop() as string
      steps--
    }
    return this.current
  }

  forward(steps: number): string {
    while (steps > 0 && this.forwardHistory.length > 0) {
      this.backHistory.push(this.current)
      this.current = this.forwardHistory.pop() as string
      steps--
    }
    return this.current
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

let browser = new BrowserHistory('leetcode.com')
console.log(browser.visit('google.com'))
console.log(browser.visit('facebook.com'))
console.log(browser.visit('youtube.com'))
console.log(browser.back(1))
console.log(browser.back(1))
console.log(browser.forward(1))
console.log(browser.visit('linkedin.com'))
console.log(browser.forward(2))
console.log(browser.back(2))
console.log(browser.back(7))
