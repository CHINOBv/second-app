import React from 'react';
import Navegation from "./components/Header/Navegation.jsx"
import Conten from "./components/Conten/Conten.jsx"
import Form from "./components/Conten/Form/Form.jsx";
import Cards from './components/Conten/Grid';
import Card from "./components/Card/Card.jsx"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Navegation }/>
        <Route path="/cards/:id" component={ Card }/>
        <Route path="/conten" component={ Conten }/>
        <Route path="/form" component={ Form }/>
        <Route path="/cards/" component={ Cards }/>
        
        <Route component={() =>(
          <h1>Error: 404</h1>
        )}/>
      </Switch>
    </Router>
  );
}

export default App;
