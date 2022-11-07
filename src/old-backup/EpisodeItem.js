import React from "react";

const EpisodeItem = (props) => {
  const { id, name, episode: episodeNr } = props;

  console.log(id);

  return (
    <li>
      <div>ID: {id}</div>
      <div>Name: {name}</div>
      <div>Episode: {episodeNr}</div>
    </li>
  );
};

export default EpisodeItem;
