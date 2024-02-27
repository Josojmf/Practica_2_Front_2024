import { FreshContext, Handlers,PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import CityComp from  "../../components/City.tsx";
type City ={
    name:string;
    country:string;
    latitude:number;
    longitude:number;
    population:number;
    is_capital:boolean;   
    };
export const handler:Handlers={
    GET: async (req:Request,ctx:FreshContext) => {
        const url = new URL(req.url);
        const city = url.searchParams.get('city');
        const headers = {
        'X-Api-Key': 'UJhYVUxrSKqPZP7V8WD9PA==sYM7jOOqw36WSoOW'
        };
        const APIurl = `https://api.api-ninjas.com/v1/city?name=${city}`;
        const response = await axios.get(APIurl,{headers});
        const cityres = response.data[0] as City;
        return ctx.render(cityres);
    }
};
const Page = (props:PageProps<City | undefined> & {city:City})    => {
    const city = props.data;
    return (
       <div>
            <form action="/city" method="get">
            <input type="text" name="city" placeholder="Nombre de la ciudad" />
            <button type="submit">Buscar</button>
            </form>

            {city && <CityComp city={city} />}
       </div>   
    );
};
export default Page;


