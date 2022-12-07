import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Acceuil } from './pages/acceuil';
import { Pokedex } from './pages/pokedex';
import { Capture } from './pages/capture';
import { Pokeinfo } from './pages/pokeinfo';

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
