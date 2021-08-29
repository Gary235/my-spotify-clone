import React, { FunctionComponent } from "react";
import styled from "styled-components";

import SideMenu from "components/main/SideMenu";

import { COLORS } from "../helpers/constants/colors";

const Layout = styled.div`
  background: ${COLORS.culturedGray};
  display: flex;
  height: 100vh;
`;

const LayoutContainer: FunctionComponent<any> = () => {
  return (
    <Layout>
      <SideMenu playlists={[]} />
    </Layout>
  );
};

export default LayoutContainer;
