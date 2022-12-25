//https://leetcode.com/problems/online-election/?envType=study-plan&id=binary-search-ii

//https://leetcode.com/problems/online-election/solutions/684452/javascript-binary-search/?envType=study-plan&id=binary-search-ii&languageTags=javascript
class TopVotedCandidate {
  private countVotes: object
  private record: object
  private times: number[]

  constructor(persons: number[], times: number[]) {
    this.countVotes = {}
    this.record = {}
    this.times = times
    let max = 0
    let lead = persons[0]
    for (let i = 0; i < persons.length; i++) {
      this.countVotes[persons[i]] = (this.countVotes[persons[i]] || 0) + 1
      if (max < this.countVotes[persons[i]]) {
        max = this.countVotes[persons[i]]
        lead = persons[i]
      } else if (max === this.countVotes[persons[i]]) {
        lead = persons[i]
      }
      this.record[times[i]] = lead
    }
  }

  q(t: number): number {
    let i = 0,
      j = this.times.length - 1
    if (t === this.times[i]) return this.record[this.times[i]]
    if (t === this.times[j]) return this.record[this.times[j]]
    let mid = Math.floor((i + j) / 2)
    while (i < j) {
      if (t === this.times[mid]) return this.record[this.times[mid]]
      if (t > this.times[mid]) i = mid + 1
      else j = mid
      mid = Math.floor((i + j) / 2)
    }
    return this.times[i] <= t
      ? this.record[this.times[i]]
      : this.record[this.times[i - 1]]
  }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
