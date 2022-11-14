import React from "react";
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

  return (
    <div>
      Home
      <button onClick={onClickButton}>Go to Register</button>
      <button onClick={onClickGoToEpisode}>Go to a specific episode</button>
    </div>
  );
};

export default Home;
