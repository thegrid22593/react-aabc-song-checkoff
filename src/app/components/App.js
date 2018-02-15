import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import firebase from 'firebase';
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import '../scss/style.scss';

const mapStateToProps = state => ({
   user: state.user.user,
   userFetched: state.user.fetched,
   songs: state.songs.songs,
});

const giveID = () => {
   //    firebase
   //       .firestore()
   //       .collection('songs')
   //       .get()
   //       .then(querySnapshot => {
   //          let i = 1;
   //          let j = 0;
   //          querySnapshot.forEach(song => {
   //             let querySong = song.data();
   //             querySong.id = i;
   //             i++;
   //             const docID = j.toString();
   //             console.log(querySong);
   //             firebase
   //                .firestore()
   //                .collection('songs')
   //                .doc(docID)
   //                .update(querySong)
   //                .then(result => {
   //                   console.log('update complete', result);
   //                });
   //             j++;
   //          });
   //       });

   firebase
      .firestore()
      .collection('users')
      .get()
      .then(userSnapshot => {
         userSnapshot.forEach(user => {
            let userData = user.data();
            let i = 1;
            let j = 0;
            let k = 1;
            let songs = [];
            userData.songs.forEach(song => {
               song.id = i;
               if (song.notes !== undefined && song.notes.length > 0) {
                  song.notes.forEach(note => {
                     note.id = k;
                     k++;
                  });
               }
               songs.push(song);
               i++;
            });
            userData.songs = songs;
            console.log(userData);
            firebase
               .firestore()
               .collection('users')
               .doc(userData.uid)
               .update(userData)
               .then(result => {
                  console.log('user updated');
               });
         });
      });
};

class App extends React.Component {
   componentWillMount() {
      if (this.props.user.uid) {
         this.context.router.history.push('/dashboard');
      } else {
         this.context.router.history.push('/sign-in');
      }

      giveID();
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

module.exports = withRouter(connect(mapStateToProps)(App));
