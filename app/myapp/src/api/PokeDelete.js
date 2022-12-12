export const Delete = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/Pokedex', {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify(pokemon)
                
            })
            .then(function(res){ console.log(res) })
            .catch(function(res){ console.log(res) })
    
    
    const pokemons = await response.json()
    return pokemons
}
    