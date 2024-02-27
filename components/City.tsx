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
            <h2>Pais:{props.city.country}</h2>
            <h3>Latitud:{props.city.latitude}</h3>
            <h4>{props.city.longitude}</h4>
            <h5>{props.city.population}</h5>
            <h6>{props.city.is_capital}</h6>
        </div>
    );
}
export default City;