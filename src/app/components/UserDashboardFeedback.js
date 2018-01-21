import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
import { Switch, Route, Router } from 'react-router-dom';
require('../scss/style.scss');

function messages () {}

class UserDashboardFeedback extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {

            }
        }
    }

    componentWillMount() {
        
    }

    render() {
        return (
            <h1>Messages</h1>
        )
    }
}

module.exports = UserDashboardFeedback;