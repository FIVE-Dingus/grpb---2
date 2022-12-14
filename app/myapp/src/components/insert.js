import { Create } from "../api/Pokemon";
import { useForm } from "react-hook-form";

export function Creator12000() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        data = {
            ...data,
            sprites:{
                normal:data.sprites,
                animated:data.sprites,
            }
        }
        delete(sprites)
        Create(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Nom du Pokemon" />
        <input {...register("sprites")} placeholder="lien photo" />
        <input {...register("type1")} placeholder="type 1" />
        <input {...register("type2")} placeholder="type 2" />
        <button type="submit">Valider</button>
      </form>
    );
  }