import React, { FunctionComponent } from "react";

import SpotifyPlayer from "react-spotify-web-playback";

import { IPlayerProps } from "./types";

const PlayerComponent: FunctionComponent<IPlayerProps> = (
  props: IPlayerProps
) => {
  const { token } = props;

  return (
    <SpotifyPlayer
      token={token}
      uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
      styles={{
        activeColor: "#fff",
        bgColor: "#333",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
      }}
    />
  );
};

export default PlayerComponent;
