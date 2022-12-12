import { useEffect, useState } from "react";
import { GetPokedex } from "../api/GetPokedex";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Pokedex() {
    const [ pokemons, setPokemons ] = useState([]);
    
    useEffect(() => {
        const pokemonsFetched = GetPokedex();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="pokedex bg-dark text-white text-center fs-1">
        <Container>
            <Row>
                <Col xs={2}>
                </Col>
                <Col xs={8}>
                    <div className="flex"><h1>LISTE DE VOS POKEMON D'EXTREME QUALITE</h1>
                    {
                        pokemons.map((pokemon,key) =>{
                            return <div key={key} className="bloc-pokemon">
                                <Container>
                                <Row className="Pokeinfo">
                                        <h2>{pokemon.name}</h2>
                                        <Col xs={4} md={4} lg={4}>
                                        <img className="normal" src={pokemon.sprites.normal} alt="sprite de {pokedex.name}"/>
                                        </Col>
                                        <Col xs={4} md={4} lg={4}>
                                            <h3>Type:{pokemon.type1?pokemon.type1.name:null},{pokemon.type2?pokemon.type2.name:null}</h3>
                                        </Col>
                                        <Col xs={4} md={4} lg={4}>
                                        <img className="animated" src={pokemon.sprites.animated} alt="sprite animé de {pokedex.name}"/>
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