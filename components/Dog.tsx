import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { type PageProps } from "$fresh/server.ts";

type Dog = {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    population: number;
    is_capital: boolean;
};
const Dog: FunctionComponent<{dog:Dog}> = (props) => {
    return (
        <div>
            <h1 className="CityDiv">{props.dog.name}</h1>
            <div>
            <h2>{props.dog.country}</h2>
            <h3>{props.dog.latitude}</h3>
            <h4>{props.dog.longitude}</h4>
            <h5>{props.dog.population}</h5>
            <h6>{props.dog.is_capital}</h6>
            /</div>
        </div>
    );
}
export default Dog;