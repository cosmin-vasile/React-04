import React from "react";
import EpisodeItem from "../EpisodeItem";

const EpisodeList = (props) => {
  const { episodeList } = props;
  return (
    <ul>
      {episodeList.map((episode) => {
        const { id, name, episode: episodeNr } = episode;
        return (
          <EpisodeItem
            key={episode.id}
            id={id}
            name={name}
            episode={episodeNr}
          />
        );
      })}
    </ul>
  );
};

export default EpisodeList;
