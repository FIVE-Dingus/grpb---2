import { GetPokedex, UpdatePokedex } from "../api/GetPokedex";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { DeletePokedex } from "../api/PokeDelete";

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
            const pokedexFetched = GetPokedex();
            pokedexFetched
                .then(result => setPokedex(result))
                .catch(error=>console.error("Erreur avec notre API :",error.message))},[count]);
    
                const PokedexDelete = (pokedex) => {
                    DeletePokedex(pokedex);
                    setCount(count+1);
                };

    
    return  <div>               
                    {
                    pokedex.map((pokedex,key) =>{
                        return <div key={key} className="bloc-pokedex">
                            <Button className="bouttonCap" onClick={()=>PokedexDelete(pokedex)}>Supprimer ce pokemon d'extreme nulité</Button>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="hidden" {...register("name")} placeholder="name" defaultValue={pokedex.name}/>
                                    <input {...register("newname")} placeholder="Newname"/>
                                    <input type="hidden" {...register("type1.id")} placeholder="type1" defaultValue={pokedex.type1.id}/>
                                    <input {...register("type1.name")} placeholder="type1" />
                                    <input type="hidden" {...register("type2.id")} placeholder="type2" defaultValue={pokedex.type2.id}/>
                                    <input {...register("type2.name")} placeholder="type2" />
                                    <button type="submit" >Valider</button>
                                </form>
                            <h3>Type:{pokedex.type1?pokedex.type1.name:null},{pokedex.type2?pokedex.type2.name:null}</h3>
                        </div>
            
                    })}
                    
            </div>};