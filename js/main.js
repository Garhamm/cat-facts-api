//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


const br = document.createElement('br')
function getFetch(){
  // const choice = document.querySelector('input').value
  // console.log(choice)
  const url = `https://v2.jokeapi.dev/joke/Programming`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        const br = document.createElement("br")
        if(data.type === 'twopart'){
          document.querySelector('h3').innerText = data.setup + data.delivery
        }else
        document.querySelector('h3').innerText = data.joke
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

