import React, { useState } from "react";

export default function Admin() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <p>Admin page</p>
      <form action="/admin" name='login'>
        <input type="text" name='login' value={login} onChange={(event) => setLogin(event.target.value)} required/>
        <input type="password" name='password' value={password} onChange={(event) => setPassword(event.target.value)} required/>
        <input type="submit" value="Log in"/>
      </form>
    </div>
  );
}
