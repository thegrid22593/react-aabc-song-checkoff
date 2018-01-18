import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignInPage from './SignInPage';
import UserDashboardPage from './UserDashboardPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/sign-in' component={SignInPage}/>
      <Route path="/dashboard" component={UserDashboardPage}/>
    </Switch>
  </main>
)

export default Main;