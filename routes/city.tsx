import { FreshContext, Handlers,PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
type City ={
    name:string;
    country:string;
    min_population:number;
    max_population:number;
    min_lat:number;
    max_lat:number;
    min_long:number;
    max_long:number;
    timezone:string;    
    };

const Page = (props:PageProps<City>) => {
    const city = props.data;
    return (
        <form action="/city" method="get">
            <input type="text" name="city" placeholder="Nombre de la ciudad" />
            <button type="submit">Buscar</button>
            </form>
            
    );
};
export default Page;