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
let error=0;
export const handler:Handlers={
    GET: async (req:Request,ctx:FreshContext) => {
        const url = new URL(req.url);
        const city = url.searchParams.get('city');
        if(!city){
            return ctx.render(undefined);
        }
        const headers = {
        'X-Api-Key': 'UJhYVUxrSKqPZP7V8WD9PA==sYM7jOOqw36WSoOW'
        };
        const APIurl = `https://api.api-ninjas.com/v1/city?name=${city}`;
        const response = await axios.get(APIurl,{headers});
        if(response.data.length === 0){
            error=1;
            return ctx.render(undefined);
        } else {
            error=0;
        }
        const cityres = response.data[0] as City;
        return ctx.render(cityres);
    }
};
const Page = (props:PageProps<City | undefined> & {city:City})    => {
    const city = props.data;
    return (
        <div>
       <div className="InCity">
            <form action="/city" method="get" className="Searchbar">
            <input type="text" name="city" placeholder="Nombre de la ciudad" />
            <button type="submit" className="SearchButton">Buscar</button>
            </form>

            {city && <CityComp city={city} />}
            {error==1 && <h1 className="ErrorNF">Ciudad no encontrada</h1>}
            {!city && <h1 className="Error">Busca una ciudad</h1>}
       </div>   
       </div>
    );
};
export default Page;


