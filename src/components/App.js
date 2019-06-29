import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './auth/Login'

function App() {
  return (
    <div className="App">
      <main className="container">
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
