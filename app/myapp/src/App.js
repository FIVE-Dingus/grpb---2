import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Pokedex } from './pages/Pokedex';
import Capture from './pages/Capture';
import Pokeinfo from './pages/Pokeinfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return <div className='yolo'>
    <h1>wtf</h1>
    <Button href="http://loc:3000/Pokeinfo">Link</Button>
    <Router>
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
