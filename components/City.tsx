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
        <div>
            <h1 className="CityDiv">{props.city.name}</h1>
            <div>
            <h2>{props.city.country}</h2>
            <h3>{props.city.latitude}</h3>
            <h4>{props.city.longitude}</h4>
            <h5>{props.city.population}</h5>
            <h6>{props.city.is_capital}</h6>
            /</div>
        </div>
    );
}
export default City;