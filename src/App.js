import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Default from './pages/Default';
import SingleRecipe from './pages/SingleRecipe';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (

    <Router>
      <main>
        <Navbar></Navbar>
      <Switch>
      {/* navbar */}
      <Route path="/" exact component={Home} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path="/recipes/:id" component={SingleRecipe} />
      <Route component={Default} />
    </Switch>
    </main>
    </Router>
  );
}

export default App;
