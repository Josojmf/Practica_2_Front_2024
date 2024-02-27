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
    good_with_dogs :number;
    good_with_strangers:number;
    };
const Dog: FunctionComponent<{dog:Dog}> = (props) => {
    return (
        <div>
            <h1 className="DogDiv">{props.dog.image_link}</h1>
            <div>
            <h2>{props.dog.max_height
            /</div>
        </div>
    );
}
export default Dog;