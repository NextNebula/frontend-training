import React, { useState, createContext } from "react";

export const EpisodePlayContext = createContext();

export const EpisodePlayContextProvider = props => {
  const [episode, setepisode] = useState(null);

  return (
    <EpisodePlayContext.Provider value={[episode, setepisode]}>
      {props.children}
    </EpisodePlayContext.Provider>
  );
};