import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import HomeView from "views/HomeView";
// import LayoutContainer from "./layout.container";

const HomeContainer: FunctionComponent<any> = () => {
  const selectAccessToken = (state: any) =>
    state.accessTokenReducer.accessToken;
  const accessToken = useSelector(selectAccessToken);
  return <HomeView token={accessToken} />;
};

export default HomeContainer;
