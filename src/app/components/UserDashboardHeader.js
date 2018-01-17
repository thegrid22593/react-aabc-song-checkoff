import ReactDOM from 'react-dom';
import React from 'react';
require('../scss/style.scss');

class UserDashboardHeader extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        let currentUser = fire.auth().currentUser;
        console.log('current user:', currentUser);
        if(currentUser) {
            // Route to dashboard
        }
    }

    render() {
        return (
           <nav>
               <ul>
                   <li><Link to="/dashboard"></Link></li>
                   <li><Link to="/songs"></Link></li>
                   <li><Link to="/checkoff"></Link></li>
               </ul>
           </nav>
        )
    }
}

module.exports = UserDashboard;