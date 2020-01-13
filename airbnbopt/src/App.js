import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard";
import Signup from "./components/signup";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/protected" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route component={Signup} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
