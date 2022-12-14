export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/Pokemon', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
         }
    )
     const pokemons = await response.json()
    return pokemons
}

export const Capture = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/Pokedex/insert', {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(pokemon)
            })    
    
    const pokemons = await response.json()
    return pokemons
}

export const getStarter = async () => {
    const response = await fetch(
        'http://localhost:4444/starter', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
         }
    )
     const pokemons = await response.json()
    return pokemons
}

export const Create = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/Pokemon/insert', {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'monlication/json'
                },
                method: "POST",
                body: JSON.stringify(pokemon)
            })    
    const pokemons = await response.json()
    return pokemons
}