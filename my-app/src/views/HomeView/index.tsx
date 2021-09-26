import React, { FunctionComponent } from "react";
// import i18next from "i18next";

// import PlayerComponent from "components/common/Player";

import { Container } from "./styles";
import { IHomeViewProps } from "./types";
import "./i18n";

const HomeView: FunctionComponent<IHomeViewProps> = (props: IHomeViewProps) => {
  const { token } = props;

  return (
    <Container>
      {/* <PlayerComponent token={token} /> */}
      {token}
    </Container>
  );
};

export default HomeView;
