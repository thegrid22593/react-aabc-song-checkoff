import React from 'react'
import { Switch, Route } from 'react-router-dom';
import SignInPage from './SignInPage';
import UserDashboardPage from './UserDashboardPage';
import MusicLibraryPage from './MusicLibraryPage';
import UserDashboardSummary from './UserDashboardSummary';
import CheckOffPage from './CheckOff/CheckOffPage';
import UserSettingsPage from "./UserSettings/UserSettingsPage";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/sign-in' component={SignInPage}/>
      <Route path="/dashboard" component={UserDashboardPage}/>
      <Route path="/music-library" component={MusicLibraryPage}/>
      <Route path="/checkoff" component={CheckOffPage}/>
      <Route path="/user-settings" component={UserSettingsPage}/>
    </Switch>
  </main>
)

export default Main;