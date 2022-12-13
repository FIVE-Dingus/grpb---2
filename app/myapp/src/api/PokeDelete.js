export const DeletePokemon = async (pokemon) => {
  const response = await fetch(
    'http://localhost:4444/pokemon', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE",
      body: JSON.stringify(pokemon)
    })
    console.log("ok",response);    
    
    const pokemons = await response.json()
    return pokemons
}

export const DeletePokedex = async (pokedex) => {
  const response = await fetch(
    'http://localhost:4444/pokedex', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE",
        body: JSON.stringify(pokedex)
        
  })

  console.log("ok",response);
  const pokemons = await response.json()
  return pokemons
}
    