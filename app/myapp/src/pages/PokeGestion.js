import { useEffect, useState } from "react";
import { getAll } from "../api/Pokemon";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { PokeDelete } from "../api/Pokemon";

function PokeGestion() {
    const [ pokemons, setPokemons ] = useState([]);
    
    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    const PokeDelete = (pokemon) => {
        
        
        
        return PokeDelete(pokemon)
    };

    return <div className="pokemon-list bg-dark text-white text-center fs-1">
        <Container>
            <Row>
                <Col xs={0} md={2} lg={2} >
                </Col>
                <Col xs={12} md={8} lg={8}>
                    <div className="flex"><h1>LISTE DES POKEMONS</h1>
                    {
                        pokemons.map((pokemon,key) =>{
                            return <div key={key} className="bloc-pokemon">
                                <Container>
                                    <Row className="PokeGestion">
                                        <h2>{pokemon.name}</h2>
                                        <Col xs={4} md={4} lg={4}>
                                        <img className="normal" src={pokemon.sprites.normal} alt="sprite de {pokemon.name}"/>
                                        </Col>
                                        <Col xs={4} md={4} lg={4}>
                                            <Button className="bouttonCap" onClick={()=>PokeDelete(pokemon)}>Supprimer le Pokemon</Button>
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
                <Col xs={0} md={2} lg={2}>
                </Col>
            </Row>
        </Container>      
    </div>
};


export default PokeGestion;