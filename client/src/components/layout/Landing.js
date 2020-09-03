import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className=" authcontainer text-right mr-5 pr-5 ">
        <Link className="ml-3 text-light" to="/register">Register</Link>
        <Link className="ml-3 text-light" to="/login">Log In</Link>
      </div>
    );
  }
}
export default Landing;