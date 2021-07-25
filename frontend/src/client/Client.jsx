import './Client.scss';
import Customers from './components/Customers/Customers';
import Users from './components/Users/Users';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/customers"><Customers/></Route>
          <Route path="/users"><Users/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
