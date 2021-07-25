import './App.scss';
import Client from './client/Client.jsx';
import Admin from './admin/Admin';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
         <Route path="/admin"><Admin/></Route>
          <Route path="/"><Client/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
