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
    return (
        <div class="user">
            <IconUser />
            <h1>Menu</h1>
            <h2>Usuario: {props.user.username}</h2>
            <h3>Sexo: {props.user.sex}</h3>
            <h4>Dirección: {props.user.address}</h4>
    </div>
    );

}
export default Menu;