import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
require('../scss/style.scss');

class UserDashboard extends React.Component {
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
            <div className="container">
                <Header />
                <SignInPage />
                <Footer />
            </div>
        )
    }
}

module.exports = UserDashboard;