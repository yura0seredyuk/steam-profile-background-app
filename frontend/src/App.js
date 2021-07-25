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
          <Route exact path="/" component={Client}/>
          <Route exact path="/admin" component={Admin}/>
          <Route path="*" component={() => <h1>404 page</h1>}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
