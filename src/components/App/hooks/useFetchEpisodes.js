import { useEffect, useState } from "react";

const useFetchEpisodes = () => {
  const [episodeList, setEpisodeList] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const { results } = response;
        setEpisodeList(results);
      });
  }, []);

  return episodeList;
};

export default useFetchEpisodes;
