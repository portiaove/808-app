import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import Home from './misc/Home'
import MachineDrum from './808/808'

function App() {
  return (
      <main className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path='/808' component={MachineDrum} />
        </Switch>
      </main>
  );
}

export default App;
