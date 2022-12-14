import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { getStarter, Capture } from "../api/Pokemon";
import { GetPokedex } from '../api/GetPokedex';

function Acceuil(Something) {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [ pokemon, setPokemon ] = useState([]);
    const [ pokedex, setPokedex ] = useState([]);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const pokemonFetched = getStarter();
        pokemonFetched
            .then(result => setPokemon(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
        const pokedexFetched = GetPokedex();
        pokedexFetched
            .then(result => setPokedex(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);

    return <div className="backgroundbg">
        <h1 className="starter text-white">choisissez votre PREMIER pokemon</h1>
        <Container>
            {
            !pokedex.find(pok=>pok.name===pokemon[0].name || pok.name===pokemon[1].name || pok.name===pokemon[2].name)?<Row> 
                <Col xs={4} md={4} lg={4}>
                    {
                        show1?<div className="poke" onClick={()=>{Capture(pokemon[0]);setCount(count+1);}}>
                            <img className="uptaille" src={pokemon[0].sprites.normal} />
                            <h2 className="uptaille">{pokemon[0].name}</h2>

                        </div>:null
                    }
                    <img className="imgpoke1" src="./image/pokeball.jpg" onClick={()=>setShow1(!show1)}/>
                </Col>
                <Col xs={4} md={4} lg={4}>
                    {
                        show2?<div className="poke" onClick={()=>{Capture(pokemon[1]);setCount(count+1);}}>
                        <img className="uptaille" src={pokemon[1].sprites.normal} />
                        <h2 className="uptaille">{pokemon[1].name}</h2>
                    </div>:null
                    }
                    <img className="imgpoke1" src="./image/pokeball.jpg" onClick={()=>setShow2(!show2)}/>
                </Col>
                <Col xs={4} md={4} lg={4}>
                    {
                        show3?<div className="poke" onClick={()=>{Capture(pokemon[2]);setCount(count+1);}}>
                        <img className="uptaille" src={pokemon[2].sprites.normal} />
                        <h2 className="uptaille">{pokemon[2].name}</h2>
                    </div>:null
                    }
                    <img className="imgpoke1" src="./image/pokeball.jpg" onClick={()=>setShow3(!show3)}/>
                </Col>
            </Row>:null
            }
            
        </Container>    
    </div>
}

export default Acceuil;