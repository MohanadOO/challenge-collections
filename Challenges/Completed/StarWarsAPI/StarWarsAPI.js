async function getPeople(id) {
  // const getPeople = await fetch(`https://swapi.dev/api/people/${id}`)
  // const data = await getPeople.json()
  // return data

  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.json())
    .then((data) => data.name)
    .catch((error) => error)
}

async function getPeopleName() {
  for (let i = 1; i < 10; i++) {
    const getPeopleName = await getPeople(i).then((data) => {
      console.log(data)
    })
    // try {
    //   console.log(getPeopleName.name)
    // } catch (error) {
    //   console.log(error)
    // }
  }
  console.log('Run')
}

getPeopleName()
