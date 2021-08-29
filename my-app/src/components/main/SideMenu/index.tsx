import React, { FunctionComponent } from "react";
import i18next from "i18next";

import { Container } from "./styles";
import { ISideMenuProps } from "./types";
import "./i18n";

const SideMenu: FunctionComponent<ISideMenuProps> = (props: ISideMenuProps) => {
  const { playlists } = props;
  console.log(playlists);
  return <Container>{i18next.t("SIDE_MENU:HELLO")}</Container>;
};

export default SideMenu;
