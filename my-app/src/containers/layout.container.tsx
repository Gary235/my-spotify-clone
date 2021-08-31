import React, { FunctionComponent } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

import SideMenuContainer from "./side_menu.container";

import { COLORS } from "../helpers/constants/colors";

const Layout = styled.div`
  background: ${COLORS.porcelain};
  display: flex;
  height: 100vh;
`;

const LayoutContainer: FunctionComponent<any> = () => {
  const defaultLocation = ["home"];
  const currentLocation = useLocation().pathname;

  const myLocation = currentLocation
    ? currentLocation.split("/").slice(1)
    : defaultLocation; // Deletes the first position of the array, that is always empty

  return (
    <Layout>
      <SideMenuContainer playlists={[]} currentLocation={myLocation} />
    </Layout>
  );
};

export default LayoutContainer;
