import { UpdatePokedex } from "../api/GetPokedex";
import { useForm } from "react-hook-form";

export function PokedexUpdate() {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        UpdatePokedex(data);
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Newname")} placeholder="Newname" />
        <input {...register("type1")} placeholder="type1" />
        <input {...register("firstName")} placeholder="type2" />
        <button type="submit">Valider</button>
        </form>
    );
    }