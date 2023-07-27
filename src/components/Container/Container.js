const Container = (props) => {
  return (
    <div className="container contain">
      <div className="row mt-4 justify-content-center">
        {props.children}
      </div>
    </div>
  );
};
export default Container;
