import React from "react";
import { useParams } from "react-router-dom";
import useFetchEpisode from "./App/hooks/useFetchEpisode";

const Episode = () => {
  let { episodeId } = useParams();
  const episode = useFetchEpisode(episodeId);
  console.log(episode);

  return <div>Episode</div>;
};

export default Episode;
