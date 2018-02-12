import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import '../scss/style.scss';

class App extends React.Component {
   componentWillMount() {
      if (this.props.user.uid) {
         this.context.router.history.push('/dashboard');
      } else {
         this.context.router.history.push('/sign-in');
      }
   }

   render() {
      return (
         <div className="app-container">
            <Header />
            <Main />
            <Footer />
         </div>
      );
   }
}

App.contextTypes = {
   router: React.PropTypes.shape().isRequired,
};

App.propTypes = {
   user: PropTypes.shape().isRequired,
};

App = withRouter(
   connect(store => {
      return {
         user: store.user.user,
         userFetched: store.user.fetched,
         songs: store.songs.songs,
      };
   })(App)
);

module.exports = App;
