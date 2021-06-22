import React, { useState, createContext } from "react";

export const EpisodeContext = createContext();

export const EpisodeContextProvider = props => {
  const [episode, setepisode] = useState(null);

  return (
    <EpisodeContext.Provider value={[episode, setepisode]}>
      {props.children}
    </EpisodeContext.Provider>
  );
};