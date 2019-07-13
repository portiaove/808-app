import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
// import Home from './misc/Home'
import Footer from './misc/Footer'
import MachineDrum from './808/808'
import Feed from './feed/Feed'
import Profile from './misc/Profile'
import { withAuthContext } from '../contexts/AuthStore'

function App(props) {
  return (
      <main className="App">
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={Feed} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/profile/:id' component={Profile} />
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path='/808' component={MachineDrum} />
        </Switch>
          {props.isAuthenticated && <Footer />}
      </main>
  );
}

export default withAuthContext(App);
