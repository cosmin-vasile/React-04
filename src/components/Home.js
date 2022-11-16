import React, { useEffect, useInsertionEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

const Home = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate("/register");
  };
  const onClickGoToEpisode = () => {
    const episodeId = 4;
    navigate(`/episode/${episodeId}`);
  };

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: "cosmin.vasile@scoalainformala.ro",
  //       password: "Password123#",
  //     }),
  //   }).then(() => {
  //     fetch("http://localhost:8080/api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: "cosmin.vasile@scoalainformala.ro",
  //         password: "asdPassword123#",
  //       }),
  //     });
  //   });
  // }, []);

  useEffect(() => {
    //console.log("input ref", inputRef.current);
    //inputRef.current.focus();
    //inputRef.current.myCustomMethod();
  }, []);

  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const onRegisterClick = () => {
    if (!fnameInputRef.current.value) {
      fnameInputRef.current.style.border = "1px solid red";
    } else {
      fnameInputRef.current.style = null;
    }
  };

  useEffect(() => {
    fnameInputRef.current.focus();
  }, []);

  return (
    <div>
      Home
      <button onClick={onClickButton}>Go to Register</button>
      <button onClick={onClickGoToEpisode}>Go to a specific episode</button>
      <div>
        <label>First name:</label>
        <Input ref={fnameInputRef} />

        <label>Last name:</label>
        <Input ref={lnameInputRef} />

        <label>Email:</label>
        <Input ref={emailInputRef} />

        <label>Password:</label>
        <Input type="password" ref={passwordInputRef} />
        <button onClick={onRegisterClick}>Register</button>
      </div>
    </div>
  );
};

export default Home;
