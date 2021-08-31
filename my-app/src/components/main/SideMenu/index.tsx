import React, { FunctionComponent } from "react";
import i18next from "i18next";

import { sideMenuLinks } from "helpers/constants/side_menu_links";

import {
  GlobalContainer,
  GroupContainer,
  GroupTitle,
  GroupBody,
  BodyItem,
  DiscoveryIcon,
} from "./styles";
import { ISideMenuProps } from "./types";
import "./i18n";

const SideMenuComponent: FunctionComponent<ISideMenuProps> = (
  props: ISideMenuProps
) => {
  const { playlists, currentLocation } = props;
  console.log(playlists);

  const renderMainSections = () => (
    <GroupContainer>
      <GroupTitle>{i18next.t("SIDE_MENU:MENU")}</GroupTitle>
      {sideMenuLinks.map((link, id) => (
        <GroupBody
          href={link.href}
          isActive={currentLocation.includes(link.locationKey)}
          key={`group-body-${id.toString()}`}
        >
          <DiscoveryIcon />
          <BodyItem>{i18next.t(`SIDE_MENU:${link.i18n}`)}</BodyItem>
        </GroupBody>
      ))}
    </GroupContainer>
  );

  return <GlobalContainer>{renderMainSections()}</GlobalContainer>;
};

export default SideMenuComponent;
