import { FreshContext, Handlers,PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import Menu from "../components/Menu.tsx";


type User ={
  username:string;
  sex:string;
  address:string;
  name:string;
  email:string;
  birthday:string;
};

export const handler:Handlers={
  GET: async (req:Request,ctx:FreshContext) => {
    const headers = {
      'X-Api-Key': 'UJhYVUxrSKqPZP7V8WD9PA==sYM7jOOqw36WSoOW'
    };
    const url = `https://api.api-ninjas.com/v1/randomuser`;
    const response = await axios.get(url,{headers});
    const user:User = response.data;
   return ctx.render(user);
  }
};
 const Page = (props:PageProps<User>) => {
    const user = props.data;
    return (
        <Menu user={user} />
    );
};
export default Page;
