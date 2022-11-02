import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeList from "./EpisodeList";

const RickyAndMortyApp = () => {
  const [episodeList, setEpisodeList] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode").then((response) => {
      const {
        status,
        data: { results },
      } = response;
      if (status === 200) {
        setEpisodeList(results);
      }
    });
  }, []);

  const onClick = () => {
    axios.get("https://rickandmortyapi.com/api/episode").then((response) => {
      const {
        status,
        data: { results },
      } = response;
      if (status === 200) {
        setEpisodeList(results);
      }
    });
  };

  return (
    <div>
      <button onClick={onClick}>Refresh</button>
      <EpisodeList key={1} episodeList={episodeList} />
    </div>
  );
};

export default RickyAndMortyApp;
