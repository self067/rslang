import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../navbar';
import Home from 'pages/Home';
import Dictionary from 'pages/Dictionary';
import Games from 'pages/Games';
import Statistic from 'pages/Statistic';
import AudioСallStartPage from '../games/AudioСall'; //открытие игры с выбором уровня сложности
import AudioСall from '../games/AudioСall/components/AudioCallGame'; //путь к самой игре
import { Sprint } from 'components/games/Sprint';
import OurGameStartPage from '../games/OurGame'; //открытие игры с выбором уровня сложности
import OurGame from '../games/OurGame/components/OurGame'; //путь к самой игре
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
          <Route path="/audioGameStartPage" component={AudioСallStartPage} />
          <Route path="/audioGame" component={AudioСall} />
          <Route path="/ourGameStartPage" component={OurGameStartPage} />
          <Route path="/ourGame" component={OurGame} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};
