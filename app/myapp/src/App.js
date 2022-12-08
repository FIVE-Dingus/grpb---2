import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Acceuil } from './pages/Acceuil';
import { Pokedex } from './pages/Pokedex';
import { Capture } from './pages/Capture';
import Pokeinfo from './pages/Pokeinfo';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/Acceuil">
            <Acceuil /> 
          </Route>
          <Route path="/Pokedex">
            <Pokedex />
          </Route>
          <Route path="/Capture">
            <Capture />
          </Route>
          <Route path="/Pokeinfo">
            <Pokeinfo />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
