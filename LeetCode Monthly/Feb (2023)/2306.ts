//https://leetcode.com/problems/naming-a-company

function distinctNames(ideas: string[]): number {
  // return iterativeSol(ideas)
  return groupByInitials(ideas)
}

// TLE Solution
function iterativeSol(ideas: string[]): number {
  let total = 0

  for (let i = 0; i < ideas.length; i++) {
    // Check Before current idea
    for (let j = 0; j < i; j++) {
      const ideaA = ideas[i]
      const ideaB = ideas[j]
      if (swap(ideaA, ideaB)) total++
    }

    // Check After current idea
    for (let j = i; j < ideas.length; j++) {
      const ideaA = ideas[i]
      const ideaB = ideas[j]
      if (swap(ideaA, ideaB)) total++
    }
  }

  function swap(a: string, b: string): boolean {
    if (a[0] === b[0]) return false

    const swapA = b[0] + a.substring(1)
    const swapB = a[0] + b.substring(1)

    if (ideas.includes(swapA) || ideas.includes(swapB)) {
      return false
    }

    return true
  }

  return total
}

function groupByInitials(ideas: string[]): number {
  let initialGroup = {}

  for (const idea of ideas) {
    const firstLetter = idea[0]
    const others = idea.substring(1)

    if (!initialGroup[firstLetter]) initialGroup[firstLetter] = new Set()
    initialGroup[firstLetter].add(others)
  }

  const keys = Object.keys(initialGroup)
  let total = 0

  for (let i = 0; i < keys.length; ++i) {
    const a = initialGroup[keys[i]]
    for (let j = i + 1; j < keys.length; ++j) {
      const b = initialGroup[keys[j]]
      let numOfMutual = 0
      for (let ideaA of a) {
        if (b.has(ideaA)) numOfMutual++
      }

      total += 2 * (a.size - numOfMutual) * (b.size - numOfMutual)
    }
  }

  return total
}

console.log(distinctNames(['coffee', 'donuts', 'time', 'toffee']))
console.log(distinctNames(['lack', 'back']))
