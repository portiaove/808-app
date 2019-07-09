import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import Home from './misc/Home'
import MachineDrum from './808/808'
import Feed from './feed/Feed'
import Profile from './misc/Profile'

function App() {
  return (
      <main className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path='/home' component={Feed} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/profile/:id' component={Profile} />
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path='/808' component={MachineDrum} />
        </Switch>
      </main>
  );
}

export default App;
