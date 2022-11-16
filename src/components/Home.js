import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate("/register");
  };
  const onClickGoToEpisode = () => {
    const episodeId = 4;
    navigate(`/episode/${episodeId}`);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "cosmin.vasile@scoalainformala.ro",
        password: "Password123#",
      }),
    }).then(() => {
      fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "cosmin.vasile@scoalainformala.ro",
          password: "asdPassword123#",
        }),
      });
    });
  }, []);

  return (
    <div>
      Home
      <button onClick={onClickButton}>Go to Register</button>
      <button onClick={onClickGoToEpisode}>Go to a specific episode</button>
    </div>
  );
};

export default Home;
