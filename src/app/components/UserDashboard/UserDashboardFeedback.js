import ReactDOM from 'react-dom';
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
require('../../scss/style.scss');

class UserDashboardFeedback extends React.Component {
   constructor() {
      super();

      this.state = {
         user: {},
      };
   }

   componentWillMount() {}

   render() {
      return <h1>Feedback</h1>;
   }
}

module.exports = UserDashboardFeedback;
