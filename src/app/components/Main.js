import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignInPage from './SignInPage';
import UserDashboardPage from './UserDashboard/UserDashboardPage';
import MusicLibraryPage from './MusicLibrary/MusicLibraryPage';
import CheckOffPage from './CheckOff/CheckOffPage';
import UserSignUp from './UserSignUp/UserSignUp';

const Main = () => (
   <main>
      <Switch>
         <Route exact path="/sign-in" component={SignInPage} />
         <Route path="/dashboard" component={UserDashboardPage} />
         <Route path="/music-library" component={MusicLibraryPage} />
         <Route path="/checkoff" component={CheckOffPage} />
         <Route path="/user-settings" component={UserSettingsPage} />
         <Route path="/user-sign-up" component={UserSignUp} />
      </Switch>
   </main>
);

export default Main;
