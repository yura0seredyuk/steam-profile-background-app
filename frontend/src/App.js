import React, { useState } from 'react';
import './App.scss';
import Client from './client/Client.jsx';
import Admin from './admin/Admin';
import AuthAdmin from './admin/pages/AuthAdmin/AuthAdmin';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Client}/>
          <Route exact path="/admin" component={() => auth ? <AuthAdmin/> : <Admin setAuth={setAuth}/>}/>
          <Route path="*" component={() => <h1>404 page</h1>}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
