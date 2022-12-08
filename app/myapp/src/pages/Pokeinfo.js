import { useEffect, useState } from "react";
import { getAll } from "../api/Pokemon";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Pokeinfo() {
    const [ pokemons, setPokemons ] = useState([]);
    
    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="pokemon-list">
        <Container>
            <Row>
                <Col xs={2}>
                </Col>
                <Col xs={8}>
                    <div className="flex"><h1>LISTE DES POKEMONS</h1>
                    {
                        pokemons.map((pokemon,key) =>{
                            return <div key={key} className="bloc-pokemon">
                                <Container>
                                    <Row>
                                        <h2>{pokemon.name}</h2>
                                        <Col xs={6}>
                                        <img className="normal" src={pokemon.sprites.normal}/>
                                        </Col>
                                        <Col xs={6}>
                                        <img className="animated" src={pokemon.sprites.animated}/>
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
    </div>
};


export default Pokeinfo;
