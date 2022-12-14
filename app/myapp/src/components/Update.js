import { GetPokedex, UpdatePokedex } from "../api/GetPokedex";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { DeletePokedex } from "../api/PokeDelete";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

export function PokedexUpdate() {
    const [ pokedex, setPokedex ] = useState([]);
    const [ count, setCount ] = useState(0);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setCount(count+1)
        console.log(data);
        UpdatePokedex(data);}
    useEffect(() => {
        console.log("useffect");
        const pokedexsFetched = GetPokedex();
        pokedexsFetched
            .then(result => setPokedex(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message))},[count]);
    
        const PokedexDelete = (pokedex) => {
            DeletePokedex(pokedex);
            setCount(count+1);
        };
    
    return  <div>               
                    {
                    pokedex.map((pokedex,key) =>{
                        return <div key={key} className="bloc-pokedex" >
                            <Container>
                                        <Row className="Pokeinfo">
                                                <h2>{pokedex.name}</h2>
                                                <Col xs={4} md={4} lg={4}>
                                                <img className="normal" src={pokedex.sprites.normal} alt="sprite de {pokedex.name}"/>
                                                </Col>
                                                <Col xs={4} md={4} lg={4}>
                                                    <Button className="bouttonCap" onClick={()=>PokedexDelete(pokedex)}>Supprimer ce pokemon d'extreme nulité</Button>
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        <input type="hidden" {...register("name")} placeholder="name" defaultValue={pokedex.name}/>
                                                        <input {...register("newname")} placeholder="Newname"/>
                                                        <input type="hidden" {...register("type1.id")} placeholder="type1" defaultValue={null}/>
                                                        <input {...register("type1.name")} placeholder="type1" />
                                                        <input type="hidden" {...register("type2.id")} placeholder="type2" defaultValue={null}/>
                                                        <input {...register("type2.name")} placeholder="type2" />
                                                        <button type="submit">Valider</button>
                                                    </form>
                                                    <h3>Type:{pokedex.type1?pokedex.type1.name:null},{pokedex.type2?pokedex.type2.name:null}</h3>
                                                    </Col>
                                                <Col xs={4} md={4} lg={4}>
                                                    <img className="animated" src={pokedex.sprites.animated} alt="sprite animé de {pokedex.name}"/>
                                                    </Col>
                                        </Row>
                                </Container>
                        </div>
            
                    })}
                    
            </div>};