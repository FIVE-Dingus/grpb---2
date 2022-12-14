import { UpdatePokedex } from "../api/GetPokedex";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function PokedexUpdate() {
    const [ pokedex, setPokedex ] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        UpdatePokedex(data);
    }
    
    return <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Newname")} placeholder="Newname" defaultValue={pokedex.name}/>
                <input {...register("type1")} placeholder="type1" />
                <input {...register("type2")} placeholder="type2" />
                <button type="submit">Valider</button>
            </form>
    }