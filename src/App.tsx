import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import Loading from './pages/Loading';

function App() {
  return (
    <Router>
      <div className="app">
          <div>

          </div>
          <Switch>
              <Route exact path={"/"} component={Loading}/>
              <Route path="/login" component={Login}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
