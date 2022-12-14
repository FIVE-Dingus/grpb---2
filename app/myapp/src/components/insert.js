import { Create } from "../api/Pokemon";

export function Creator() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);   
        Create(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("NomduPokemon")} placeholder="Nom du " />
        <input {...register("lienphoto")} placeholder="lien photo" />
        <select {...register("category", { required: true })}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <textarea {...register("aboutYou")} placeholder="About you" />
        <button type="submit">Valider</button>
      </form>
    );
  }