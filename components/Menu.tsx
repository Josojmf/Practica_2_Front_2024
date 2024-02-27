import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/user.tsx"

type User ={
    username:string;
    sex:string;
    address:string;
    name:string;
    email:string;
    birthday:string;
  };

const Menu: FunctionComponent<{ user:User }> = (props) => {
    var gender =null;
    if(props.user.sex == "M"){
        gender = "Masculino";
    }
    else{
        gender = "Femenino";
    }
    return (
        <div class="user">
            <IconUser />
            <h1>{props.user.username}</h1>
            <h2>{props.user.email}</h2>
            <h3>Sexo: {gender}</h3>
            <h3>Dirección: {props.user.address}</h3>
    </div>
    );

}
export default Menu;