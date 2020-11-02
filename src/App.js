import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Thanks from './pages/Thanks';

function App() {
  return (
    <>
    <Router>
  <Navbar/>
  <Switch>
    <Route path ='/' exact component={ Home }></Route>
    <Route path ='/products' component={ Products }></Route>
    <Route path ='/contact' component={ Contact }></Route>
    <Route exact path ='/thanks' component={ Thanks }></Route>
  </Switch>
  </Router>
    </>
  );
}

export default App;
