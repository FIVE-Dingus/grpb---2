import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      </Switch>
    </Router>
  );
}

export default App;
