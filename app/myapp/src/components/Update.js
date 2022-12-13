import { useForm } from 'react-hook-form';

export function App() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      const response = fetch(
        'http://localhost:4444/Pokemon/insert', {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(function(res){ console.log(res) })
            .catch(function(res){ console.log(res) })
    
    
    const pokemons = response.json()
    return pokemons
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("newname")} placeholder="newname" />
        <input {...register("type1")} placeholder="type1" />
        <input {...register("type2")} placeholder="type2" />
        <button type="submit">Valider</button>
      </form>
    );
  }