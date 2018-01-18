import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignInPage from './SignInPage';
import UserDashboardPage from './UserDashboardPage';
import MusicLibraryPage from './MusicLibraryPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/sign-in' component={SignInPage}/>
      <Route path="/dashboard" component={UserDashboardPage}/>
      <Route path="/music-library" component={MusicLibraryPage}/>
    </Switch>
  </main>
)

export default Main;