import ReactDOM from 'react-dom';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SignInPage from './SignInPage';
import fire from '../../fire';
import Main from './Main';
import { connect } from 'react-redux';
require('../scss/style.scss');


class App extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        let userId = sessionStorage.getItem('userID');
        if(userId) {
            this.context.router.history.push('/dashboard');
        } else {
            this.context.router.history.push('/sign-in');
        }
    }

    render() {
        console.log(this.props);
        return (
            <Main/>
        )
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
}

App = connect((store) => {
    return {
        user: 1,
        // user: store.user
    };
})(App);

module.exports = App;