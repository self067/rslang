import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../navbar';
import Home from 'pages/Home';
import Dictionary from 'pages/Dictionary';
import Games from 'pages/Games';
import Statistic from 'pages/Statistic';
import AudioCallStartPage from '../Games/AudioCall'; //открытие игры с выбором уровня сложности
import AudioCall from '../Games/AudioCall/components/AudioCallGame'; //путь к самой игре
import SavannahGame from 'components/Games/components/SavannaGame';
import SavannahGameStartPage from 'components/Games/components/SavannaGame/SavannaGameStartPage';
import { Sprint } from 'components/Games/Sprint';
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
          <Route path="/savannaGame" component={SavannahGame} />
          <Route path="/savannaGameStartPage" component={SavannahGameStartPage} />
          <Route path="/statistic" component={Statistic} />
          <Route path="/audioGameStartPage" component={AudioCallStartPage} />
          <Route path="/audioGame" component={AudioCall} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};
