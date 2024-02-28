import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { type PageProps } from "$fresh/server.ts";

type City = {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    population: number;
    is_capital: boolean;
};

const City: FunctionComponent<{city:City}> = (props) => {
    return (
        <div className="City">
            <h1>{props.city.name}</h1>
            <li>Latitude: {props.city.latitude}</li>
            <li>Longitude: {props.city.longitude}</li>
            <li>Country: {props.city.country}</li>
            <li>Population: {props.city.population}</li>
            <li>Capital: {props.city.is_capital ? 'Yes' : 'No'}</li> 
        </div>
    );
}
export default City;