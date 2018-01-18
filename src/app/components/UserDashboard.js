import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
require('../scss/style.scss');
class UserDashboard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <h1>This is the dashboard</h1>
        )
    }
}

module.exports = UserDashboard;