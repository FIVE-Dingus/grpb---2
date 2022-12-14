import { Create } from "../api/Pokemon";
import { useForm } from "react-hook-form";

export function Creator12000() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        data = {
          ...data,
          sprites: {
            normal: data["sprites"]
          }
        }
        Create(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Nom du Pokemon" />
        <input {...register("sprites")} placeholder="lien photo" />
        <input type="hidden" {...register("type1.id")} placeholder="type1" defaultValue={null}/>
        <input {...register("type1.name")} placeholder="type 1" />
        <input type="hidden" {...register("type2.id")} placeholder="type2" defaultValue={null}/>
        <input {...register("type2.name")} placeholder="type 2" />
        <button type="submit">Valider</button>
      </form>
    );
  }