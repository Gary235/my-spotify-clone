import React, { FunctionComponent } from "react";

import SideMenuComponent from "components/main/SideMenu";
import { ISideMenuProps } from "components/main/SideMenu/types";

const SideMenuContainer: FunctionComponent<ISideMenuProps> = (
  props: ISideMenuProps
) => {
  const { playlists, currentLocation } = props;

  return (
    <SideMenuComponent
      playlists={playlists}
      currentLocation={currentLocation}
    />
  );
};

export default SideMenuContainer;
