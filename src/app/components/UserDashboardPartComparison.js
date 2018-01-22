import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
import {Switch, Route, Router} from 'react-router-dom';
require('../scss/style.scss');

function messages() {}

class UserDashboardPartComparison extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
    };
  }

  componentWillMount() {
    let currentUserId = sessionStorage.getItem('userID');
    if (currentUserId) {
      let userDbRef = fire
        .database()
        .ref('users')
        .once('value')
        .then(snapshot => {
          console.log('snapshot', snapshot);
        });
      console.log('userdbref:', userDbRef);
    }
  }

  render() {
    return <h1>Part Comparison</h1>;
  }
}

module.exports = UserDashboardPartComparison;
