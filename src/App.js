import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Nav from './components/Nav/Nav.jsx'
import Home from './components/Home/Home.jsx'
import Cursos from './components/Courses/Curso-Columns.jsx'
import Curso from './components/Courses/Curso.jsx'

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={ Home }/>
        <Route path="/cursos/:id" component={Curso}/>
        <Route path="/cursos" component={Cursos}/>
        <Route component={()=>(
          <h1>Error 404 Not Found</h1>
        )}/>
      </Switch>
    </Router>
  );
}

export default App;
