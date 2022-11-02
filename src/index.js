import React from "react";
import ReactDOM from "react-dom/client";
// import AppHooks from "./components/AppHooks";
// import App from "./components/App";
// import CartApp from "./components/CartApp";
import RickyAndMortyApp from "./components/RickyAndMortyApp";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RickyAndMortyApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
