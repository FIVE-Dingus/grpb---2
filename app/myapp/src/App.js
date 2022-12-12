import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Pokedex } from './pages/Pokedex';
import Capture from './pages/Capture';
import Pokeinfo from './pages/Pokeinfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {
  Link
} from "react-router-dom";

function App() {
  return <div className='yolo'>   
    <Router>
      <nav>
        <ul list-style-type:none>
            <li><Link to="/Pokedex">Pokedex</Link></li>
            <li><Link to="/Capture">Capture</Link></li>
            <li><Link to="/Pokeinfo">Pokeinfo</Link></li>
            <li><Link to="/PokeGestion">PokeGestion</Link></li>
        </ul>
      </nav> 
      <Switch>
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
  </div>;
}

export default App;
