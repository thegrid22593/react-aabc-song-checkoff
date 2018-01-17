import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignInPage from './SignInPage';
import UserDashboard from './UserDashboard';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/sign-in' component={SignInPage}/>
      <Route path="/dashboard" component={UserDashboard}/>
    </Switch>
  </main>
)

export default Main;