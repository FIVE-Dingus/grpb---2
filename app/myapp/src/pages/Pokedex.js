import { useEffect, useState } from "react";
import { GetPokedex, UpdatePokedex } from "../api/GetPokedex";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DeletePokedex } from "../api/PokeDelete";
import Button from 'react-bootstrap/Button';

function Pokedex() {
    const [ pokedexs, setPokedexs ] = useState([]);
    const [ count, setCount ] = useState(0);
    
    useEffect(() => {
        const pokedexsFetched = GetPokedex();
        pokedexsFetched
            .then(result => setPokedexs(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);

    const PokeDelete = (pokedex) => {
        
        
        setCount(count+10);
        return DeletePokedex(pokedex)
    };
    const PokedexUpdate = (pokedex) => {
        
        
        setCount(count+10);
        return UpdatePokedex(pokedex)
    };
    return <div className="pokedex bg-dark text-white text-center fs-1">
        <Container>
            <Row>
                <Col xs={2}>
                </Col>
                <Col xs={8}>
                    <div className="flex"><h1>LISTE DE VOS POKEMON D'EXTREME QUALITE</h1>
                    {
                        pokedexs.map((pokedex,key) =>{
                            return <div key={key} className="bloc-pokedex">
                                <Container>
                                <Row className="Pokeinfo">
                                        <h2>{pokedex.name}</h2>
                                        <Col xs={4} md={4} lg={4}>
                                        <img className="normal" src={pokedex.sprites.normal} alt="sprite de {pokedex.name}"/>
                                        </Col>
                                        <Col xs={4} md={4} lg={4}>
                                            <Button className="bouttonCap" onClick={()=>PokeDelete(pokedex)}>Supprimer ce pokemon d'extreme nulité</Button>
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
    </div>
};


export {Pokedex};