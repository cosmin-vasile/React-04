import React from "react";
import { Outlet, NavLink } from "react-router-dom";

//Holds app structure
const App = () => {
  return (
    <div className="main-app">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="register">Register</NavLink>
        <NavLink to="login">Login</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
