//import { Fragment } from "react";
import Card from "../Card/Card";
const Pokemon = (props) => {
  return (
    <Card>
      <img
        className="card-img-top"
        id="photo"
        src={props.Pokemon.photo}
        alt="Card"
      />
      <div className="card-body">
        <h5 id="label" className="card-title">
          {props.Pokemon.label}
        </h5>
        <p>
          weight : <span id="weight">{props.Pokemon.weight}</span>
        </p>
        <h6>Abilities :</h6>
        <ul id="list" className="list-group-item-dark rounded">
          {props.Pokemon.ability.map((ability) => (
            <li key={Math.floor(Math.random() * 10)}>{ability}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
export default Pokemon;