import { FreshContext, Handlers,PageProps } from "$fresh/server.ts";
import re from "https://esm.sh/v135/preact-render-to-string@6.3.1/X-ZS8q/denonext/preact-render-to-string.mjs";
import axios from "npm:axios";
import { FunctionComponent } from "preact";
import AircraftComponent from "../../components/Plane.tsx";

type Aircraft ={
  manufacturer:string;
  model:string;
  engine_type:string;
  engine_thrust_lb_ft:string;
  max_speed_knots:string;
  cruise_speed_knots:string;
  ceiling_ft:string;
  takeoff_ground_run_ft:string;
  landing_ground_roll_ft:string;
  gross_weight_lbs:string;
  empty_weight_lbs :string;
  length_ft :string;
  height_ft :string;
  wing_span_ft :string;
  range_nautical_miles:string;
};

export const handler:Handlers={
  GET: async (req:Request,ctx:FreshContext) => {
    const model = ctx.params.model;
    const headers = {
      'X-Api-Key': 'UJhYVUxrSKqPZP7V8WD9PA==sYM7jOOqw36WSoOW'
    };
    const url = `https://api.api-ninjas.com/v1/aircraft?manufacturer=Gulfstream&model=${model}`;
    const response = await axios.get(url,{headers});
    const avion = await response.data[0] as Aircraft;
   return ctx.render(avion);
  }
};
 const Page = (props:PageProps & {avion: Aircraft}) => {
    return (
        <div class="avionComponent">
           <AircraftComponent avion={props.data} />
        </div>
    );
};
export default Page;
