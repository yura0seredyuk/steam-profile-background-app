import React, { useState } from 'react';
import './App.scss';
import Client from './ui/client/Client.jsx';
import Admin from './ui/admin/pages/Admin/Admin';
import AuthAdmin from './ui/admin/pages/AuthAdmin/AuthAdmin';

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
          <Route path="/admin">{auth ? <AuthAdmin/> : <Admin setAuth={setAuth}/>}</Route>
          <Route path="/"><Client/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
