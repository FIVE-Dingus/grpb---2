export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon', {
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
const [ pokemons, setPokemons ] = useState([]);

//va s'executer seulement au lancement du composant (dep: [])
useEffect(async () => {
  // récupérer la liste des users seulement au chargement du composant ! 
  const pokemons = await getAll();
  setPokemons(pokemons);
},[]);