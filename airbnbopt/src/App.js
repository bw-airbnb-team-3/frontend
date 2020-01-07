import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import Signin from './components/signin';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import protectedRoute from './components/protectedRoute';
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <protectedRoute exact path = "/protected" component={Dashboard}/>
          <Route path="/signup" component={Signup} />
          <Route component={Signup} />
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
