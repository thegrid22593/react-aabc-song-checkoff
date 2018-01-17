import ReactDOM from 'react-dom';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SignInPage from './SignInPage';
require('../scss/style.scss');

class App extends React.Component {
    constructor() {
        super();
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

module.exports = App;