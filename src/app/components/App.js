import ReactDOM from 'react-dom';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SignIn from './SignIn';
require('../scss/style.scss');

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SignIn />
                <Footer />
            </div>
        )
    }
}

module.exports = App;