import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Signup from './signup/Signup';
import Otp from './otp/Otp';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Signup />
          </Route>
          <Route path="/otp">
            <Otp />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  )
}

export default App