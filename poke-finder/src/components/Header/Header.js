import { Fragment, useState } from "react";
import React from "react";
const Header = (props) => {
    const [userInput,setuserInput] = useState('');
    const changeHandler = (event) =>{
        setuserInput(event.target.value);
    }
    const clickHandler = (event) =>{
        event.preventDefault();
        props.Onclick(userInput);
    }
  return (
    <Fragment>
        <div className="text-center mb-5 mt-5 text-warning">
            <h1>Poké Finder</h1>
        </div>
      <form className="col-sm-4 d-flex justify-content-center mt-4" onSubmit={clickHandler}>
        <div className="form-floating">
          <input
            placeholder="Enter Username"
            id="pokemon"
            type="text"
            name="pokemon"
            className="form-control"
            onChange={changeHandler}
          />
          <label htmlFor="Search Pokemon">Search Pokemon</label>
        </div>
        <div className="col-sm-1">
        <button
          id="search"
          type="submit"
          className="btn btn-primary h-100 btn-rip"
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
      </form>
    </Fragment>
  );
};
export default Header;
