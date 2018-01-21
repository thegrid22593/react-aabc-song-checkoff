import ReactDOM from 'react-dom';
import React from 'react';
import { Link , NavLink} from 'react-router-dom';
require('../scss/style.scss');

class UserDashboardSummary extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
       
    }

    render() {
        return (
            <h1>Summary</h1>
        )
    }
}


module.exports = UserDashboardSummary;