import ReactDOM from 'react-dom';
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
require('../../scss/style.scss');

class UserDashboardPartComparison extends React.Component {
   constructor() {
      super();
   }

   componentWillMount() {}

   render() {
      return <h1>Part Comparison</h1>;
   }
}

module.exports = UserDashboardPartComparison;
