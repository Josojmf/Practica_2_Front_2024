import { FreshContext, Handlers,PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import CityComp from  "../../components/City.tsx";
type Dog ={
    image_link:string;
    max_height_male :number;
    max_height_female :number;
    max_weight_male :number;
    max_weight_female :number;
    good_with_children :number;
    good_with_dogs :number;
    good_with_strangers:number;
    };
export const handler:Handlers={
    GET: async (req:Request,ctx:FreshContext) => {
        const url = new URL(req.url);
        const city = url.searchParams.get('city');
        const headers = {
        'X-Api-Key': 'UJhYVUxrSKqPZP7V8WD9PA==sYM7jOOqw36WSoOW'
        };
        const APIurl = `https://api.api-ninjas.com/v1/dogs?name=${city}`;
        const response = await axios.get(APIurl,{headers});
        const cityres = response.data[0] as Dog;
        console.log(cityres);
        return ctx.render(cityres);
    }
};
const Page = (props:PageProps<Dog | undefined> & {dog:Dog})    => {
    const dog = props.data;
    return (
       <div>
            <form action="/city" method="get">
            <input type="text" name="city" placeholder="Nombre de la ciudad" />
            <button type="submit">Buscar</button>
            </form>

            {city && <CityComp dog={dog} />}
       </div>   
    );
};
export default Page;


