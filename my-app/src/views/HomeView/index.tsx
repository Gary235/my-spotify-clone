import React, { FunctionComponent } from "react";
import i18next from "i18next";

import { Container } from "./styles";
import { IHomeViewProps } from "./types";
import "./i18n";

const HomeView: FunctionComponent<IHomeViewProps> = (props: IHomeViewProps) => {
  const { topArtists, genres, topCharts } = props;
  console.log(topArtists, genres, topCharts);
  return <Container>{i18next.t("HOME_VIEW:HELLO")}</Container>;
};

export default HomeView;
