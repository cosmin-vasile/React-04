import React from "react";
import routes from "../routes";
import { Link } from "react-router-dom";
import "./StructuredApp.css";

const StructuredApp = () => {
  return (
    <div className="main-app">
      <header>
        <Link to="/">Home</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
      </header>
      <main>{routes}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default StructuredApp;
