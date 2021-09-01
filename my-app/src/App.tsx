import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";

import { onGetAuthUser } from "redux/dispatch_actions/auth_user.d_actions";
// import { onGetAccessToken } from "redux/dispatch_actions/access_token.d_actions";

import HomeContainer from "containers/home.container";

import "./styles.css";

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetAuthUser());
    // const selectCode = (state: any) => state.authUserReducer.code;
    // const code = useSelector(selectCode);

    // dispatch(onGetAccessToken(code));
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={HomeContainer} />
        <Route component={HomeContainer} />
      </Switch>
    </>
  );
};

export default App;
