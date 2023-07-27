//import Pokemon from "../Pokemon/Pokemon";

const Card = (props) => {
  const MyStyle = {
    width: "18rem",
  };
  return (
    <div className="row justify-content-center mt-4">
      <div className="card" style={MyStyle}>
        {props.children}
      </div>
    </div>
  );
};
export default Card;
