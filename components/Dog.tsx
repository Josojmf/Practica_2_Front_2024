import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { type PageProps } from "$fresh/server.ts";

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
const Dog: FunctionComponent<{dog:Dog}> = (props) => {
    return (
        <div>
            <div className="Dog">
            <img className="DogImg" src={props.dog.image_link} width="200px" height="200px" alt="Dog" />
            <div className="DogData">
            <h1>{props.dog.name}</h1>
            <p>Altura Maxima Macho: {props.dog.max_height_male}</p>
            <p>Altura Maxima Hembra: {props.dog.max_height_female}</p>
            <p>Peso Maximo Macho: {props.dog.max_weight_male}</p>    
            <p>Peso Maximo Hembra: {props.dog.max_weight_female}</p>
            <p>ScoreStrangers: {props.dog.good_with_strangers}</p>
            <p>Score Children: {props.dog.good_with_children}</p>    
            <p>Good with other dogs: {props.dog.good_with_other_dogs}</p>
            </div>
            </div>
        </div>
    );
}
export default Dog;