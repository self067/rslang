import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppStyled } from './styled';
import { Navbar } from '../navbar';
import Home from '../../pages/Home';
import Dictionary from 'pages/Dictionary';
import Games from 'pages/Games';
import Statistic from 'pages/Statistic';

export const App = () => {
  return (
    <AppStyled>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dictionary" component={Dictionary} />
          <Route path="/games" component={Games} />
          <Route path="/statistic" component={Statistic} />
        </Switch>
      </Router>
    </AppStyled>
  );
};

// TODO: add Route path='/sign-up' component={SignUp}
