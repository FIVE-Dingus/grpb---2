import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Pokedex } from './pages/Pokedex';
import Pokeinfo from './pages/Pokeinfo';
import Acceuil from './pages/Acceuil';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button  from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import PokeGestion from './pages/PokeGestion';

function App() {
  return <div className='navebare'>   
    <Router>
      <nav >
        <ul className='list text-white'>
          <li><Link className='text-white' to="/">Acceuil</Link></li>
          <li><Link className='text-white' to="/pokedex">Pokedex</Link></li>
          <li><Link className='text-white' to="/pokeinfo">Pokeinfo</Link></li>
          <li><Link className='text-white' to="/pokegestion">PokeGestion</Link></li>
        </ul>
      </nav> 
      <Switch>
          <Route exact path="/">
            <Acceuil />
          </Route>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/pokeinfo">
            <Pokeinfo />
          </Route>
          <Route path="/pokegestion">
            <PokeGestion />
          </Route>
      </Switch>
    </Router>
  </div>;
}

export default App;
