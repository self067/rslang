import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../navbar';
import Home from 'pages/Home';
import Dictionary from 'pages/Dictionary';
import Games from 'pages/Games';
import Statistic from 'pages/Statistic';
import SingUp from 'pages/SingUp';
import { Sprint } from 'components/games/Sprint';
import UserContext from 'components/Auth/UserContext';

export const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dictionary" component={Dictionary} />
          <Route path="/games" component={Games} />
          <Route path="/sprintGame" component={Sprint} />
          <Route path="/statistic" component={Statistic} />
          <Route path="/sign-up" component={SingUp} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};
