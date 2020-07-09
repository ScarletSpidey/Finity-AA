import React, { Component } from 'react';
import LoginPage from '../components/LoginPage/LoginPage';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from '../components/RegisterPage/RegisterPage';
import HomePage from '../components/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/Login' component={LoginPage} />
            <Route path='/Register' component={RegisterPage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
