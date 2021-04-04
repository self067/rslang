import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../components/Games/components/SavannaGame';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/game" component={Index} />
    </Switch>
  );
};

export default Routes;
