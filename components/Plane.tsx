import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
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

const AircraftComponent: FunctionComponent<{ avion: Aircraft }> = (props) => {
    console.log(props.avion);
    return (
        <div>
        <h1 class="planeName">{props.avion.model}</h1>
        <p>Manufacturer: {props.avion.manufacturer}</p>
        <p>Engine type: {props.avion.engine_type}</p>
        <p>Engine thrust: {props.avion.engine_thrust_lb_ft}</p>
        <p>Max speed: {props.avion.max_speed_knots}</p>
        <p>Cruise speed: {props.avion.cruise_speed_knots}</p>
        <p>Ceiling: {props.avion.ceiling_ft}</p>
        <p>Takeoff ground run: {props.avion.takeoff_ground_run_ft}</p>
        <p>Landing ground roll: {props.avion.landing_ground_roll_ft}</p>
        <p>Gross weight: {props.avion.gross_weight_lbs}</p>
        <p>Empty weight: {props.avion.empty_weight_lbs}</p>
        <p>Length: {props.avion.length_ft}</p>
        <p>Height: {props.avion.height_ft}</p>
        <p>Wing span: {props.avion.wing_span_ft}</p>
        </div>
    );

}
export default AircraftComponent;