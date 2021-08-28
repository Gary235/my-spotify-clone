import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';

import { onGetAccessToken } from 'redux/dispatch_actions/access_token.d_actions';

import LayoutContainer from 'containers/layout.container';

import './styles.css';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetAccessToken());
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={LayoutContainer} />
      </Switch>
    </>
  );
};

export default App;
