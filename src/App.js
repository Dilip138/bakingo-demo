import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import BakingoComponent from './components/bakingo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="" component={BakingoComponent}></Route>
      </Switch>
    </Router>
  )
}

export default App;
