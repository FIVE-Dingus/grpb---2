import { useEffect, useState } from "react";
import { getPokedex } from "../api/GetPokedex";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Pokedex() {
    const [ pokemons, setPokemons ] = useState([]);
    
    useEffect(() => {
        const pokemonsFetched = getPokedex();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="pokemon-list bg-dark text-white text-center fs-1">
        <Container>
            <Row>
                <Col xs={2}>
                </Col>
                <Col xs={8}>
                    <div className="flex"><h1>LISTE DE VOS Pokemon de qualité</h1>
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


export {Pokedex};