import { useEffect, useState } from "react";

const useFetchEpisode = (episodeId) => {
  const [episode, setEpisode] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setEpisode(response);
      });
  }, [episodeId]);

  return episode;
};

export default useFetchEpisode;
