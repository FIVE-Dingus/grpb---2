import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { getStarter } from "../api/Pokemon";

function Acceuil(Something) {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [ pokemon, setPokemon ] = useState([]);
    
    useEffect(() => {
        const pokemonFetched = getStarter();
        pokemonFetched
            .then(result => setPokemon(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="backgroundbg">
        <h1 className="starter text-white">choisissez votre PREMIER pokemon</h1>
        <Container>
            <Row> 
                <Col xs={4} md={4} lg={4}>
                    {
                        show1?<div>
                            <img src={pokemon[0].sprites.normal} />
                            <h2>{pokemon[0].name}</h2>
                        </div>:null
                    }
                    <img className="imgpoke1" src="./image/pokeball.jpg" onClick={()=>setShow1(!show1)}/>
                </Col>
                <Col xs={4} md={4} lg={4}>
                    {
                        show2?<div>
                        <img src={pokemon[1].sprites.normal} />
                        <h2>{pokemon[1].name}</h2>
                    </div>:null
                    }
                    <img className="imgpoke1" src="./image/pokeball.jpg" onClick={()=>setShow2(!show2)}/>
                </Col>
                <Col xs={4} md={4} lg={4}>
                    {
                        show3?<div>
                        <img src={pokemon[2].sprites.normal} />
                        <h2>{pokemon[2].name}</h2>
                    </div>:null
                    }
                    <img className="imgpoke1" src="./image/pokeball.jpg" onClick={()=>setShow3(!show3)}/>
                </Col>
            </Row>   
        </Container>    
    </div>
}

export default Acceuil;