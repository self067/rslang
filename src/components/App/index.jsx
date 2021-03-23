import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../navbar';
import Home from '../../pages/Home';
import Dictionary from 'pages/Dictionary';
import Games from 'pages/Games';
import Statistic from 'pages/Statistic';

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dictionary" component={Dictionary} />
          <Route path="/games" component={Games} />
          <Route path="/statistic" component={Statistic} />
        </Switch>
      </Router>
    </>
  );
};

// TODO: add Route path='/sign-up' component={SignUp}
