import { FreshContext, Handlers,PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import DogComp from "../../components/Dog.tsx";
type Dog ={
    name: string;
    image_link:string;
    max_height_male :number;
    max_height_female :number;
    max_weight_male :number;
    max_weight_female :number;
    good_with_children :number;
    good_with_other_dogs :number;
    good_with_strangers:number;
    };
export const handler:Handlers={
    GET: async (req:Request,ctx:FreshContext) => {
        const url = new URL(req.url);
        const dog = url.searchParams.get('dog');
        console.log(dog);
        const headers = {
        'X-Api-Key': 'UJhYVUxrSKqPZP7V8WD9PA==sYM7jOOqw36WSoOW'
        };
        const APIurl = `https://api.api-ninjas.com/v1/dogs?name=${dog}`;
        const response = await axios.get(APIurl,{headers});
        const dogres = response.data[0] as Dog;
        return ctx.render(dogres);
    }
};
const Page = (props:PageProps<Dog | undefined> & {dog:Dog})    => {
    const dog = props.data;
    return (
       <div>
            <form action="/dog" method="get">
            <input type="text" name="dog" placeholder="Raza Perro" className="SearchbarDog" />
            <button type="submit" className="DogButton">Buscar</button>
            </form>
            {dog && <DogComp dog={dog} />}


       </div>   
    );
};
export default Page;


