import { useEffect, useState } from "react";
import { GetPokedex } from "../api/GetPokedex";
import { getAll } from "../api/Pokemon"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { DeletePokemon , DeletePokedex} from "../api/PokeDelete";
import { PokedexUpdate } from "../components/update";


function PokeGestion() {
    const [ pokedex, setPokedex ] = useState([]);
    const [ pokemons, setPokemons ] = useState([]);
    const [ count, setCount ] = useState(0);
    
    useEffect(() => {
        console.log("useeffect");
        const pokedexFetched = GetPokedex();
        pokedexFetched
            .then(result => setPokedex(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));

        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);

    const PokemonDelete = (pokemon) => {
        DeletePokemon(pokemon)
        setCount(count+1);
    };

    const PokedexDelete = (pokedex) => {
        DeletePokedex(pokedex);
        setCount(count+1);
    };

    return <div className="pokedex bg-dark text-white text-center fs-1">
        <Container className="PokeGestion">
            <Row>
                <Col xs={12} md={6} lg={6}>
                <Container>
                    <Row>
                        <Col xs={2}>
                        </Col>
                        <Col xs={8}>
                            <div className="flex"><h1>GESTION DE VOS POKEMON D'EXTREME QUALITE</h1>
                            {
                                pokedex.map((pokedex,key) =>{
                                    return <div key={key} className="bloc-pokedex">
                                        <Container>
                                        <Row className="Pokeinfo">
                                                <h2>{pokedex.name}</h2>
                                                <Col xs={4} md={4} lg={4}>
                                                <img className="normal" src={pokedex.sprites.normal} alt="sprite de {pokedex.name}"/>
                                                </Col>
                                                <Col xs={4} md={4} lg={4}>
                                                    <Button className="bouttonCap" onClick={()=>PokedexDelete(pokedex)}>Supprimer ce pokemon d'extreme nulité</Button>
                                                    <PokedexUpdate />
                                                    <h3>Type:{pokedex.type1?pokedex.type1.name:null},{pokedex.type2?pokedex.type2.name:null}</h3>
                                                </Col>
                                                <Col xs={4} md={4} lg={4}>
                                                <img className="animated" src={pokedex.sprites.animated} alt="sprite animé de {pokedex.name}"/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                })
                            }
                            </div>
                        </Col>
                        <Col xs={2}>
                        </Col>
                    </Row>
                </Container> 
                </Col>
                <Col xs={12} md={6} lg={6}>
                <Container>
                    <Row>
                        <Col xs={2}>
                        </Col>
                        <Col xs={8}>
                            <div className="flex"><h1>GESTION DE VOS POKEMON D'EXTREME QUALITE</h1>
                            {
                                pokemons.map((pokemon,key) =>{
                                    return <div key={key} className="bloc-pokemon">
                                        <Container>
                                        <Row className="Pokeinfo">
                                                <h2>{pokemon.name}</h2>
                                                <Col xs={4} md={4} lg={4}>
                                                <img className="normal" src={pokemon.sprites.normal} alt="sprite de {pokemon.name}"/>
                                                </Col>
                                                <Col xs={4} md={4} lg={4}>
                                                    <Button className="bouttonCap" onClick={()=>PokemonDelete(pokemon)}>Supprimer ce pokemon d'extreme nulité</Button>
                                                    <h3>Type:{pokemon.type1?pokemon.type1.name:null},{pokemon.type2?pokemon.type2.name:null}</h3>
                                                </Col>
                                                <Col xs={4} md={4} lg={4}>
                                                <img className="animated" src={pokemon.sprites.animated} alt="sprite animé de {pokemon.name}"/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                })
                            }
                            </div>
                        </Col>
                        <Col xs={2}>
                        </Col>
                    </Row>
                </Container>
                </Col>
            </Row>
        </Container>      
    </div>
};


export default PokeGestion;