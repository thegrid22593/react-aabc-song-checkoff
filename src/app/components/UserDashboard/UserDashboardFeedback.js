import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import UserDashboardSingleFeedback from './UserDashboardSingleFeedback';
import '../../scss/style.scss';

const mapStateToProps = state => ({
   user: state.user.user,
});

class UserDashboardFeedback extends Component {
   constructor(props) {
      super(props);

      this.state = {
         user: {},
         activeFeedback: [],
      };

      console.log('feedback', props);
   }

   componentWillMount() {}

   showFeedback(e, song) {
      e.preventDefault();
      console.log('FEEDBACK', song.notes);
      this.setState({
         activeFeedback: song.notes,
      });
      console.log('STATE', this.state);
      console.log('feedback', this.state.activeFeedback);
      this.context.router.history.push(`/dashboard/feedback/${song.name}`);
   }

   deleteFeedback(e, songToDelete) {
      e.preventDefault();

      console.log('song to delete', songToDelete);

      const songs = this.props.user.songs;

      const newSongs = songs.map(song => {
         if (song.name === songToDelete.name) {
            song.notes = [];
         }
         return song;
      });
      console.log('new songs', newSongs);
      const userData = this.props.user;

      userData.songs = newSongs;

      console.log('new user', userData);

      firebase
         .firestore()
         .collection('users')
         .doc(userData.uid)
         .update(userData)
         .then(result => {
            console.log('done', result);
         });
   }

   render() {
      return (
         <section className="feedback">
            <div className="songs-with-feedback">
               <h5>Feedback Messages</h5>
               <ul className="feedback-list">
                  {this.props.user.songs.map(song => {
                     if (song.notes !== undefined && song.notes.length > 0) {
                        return (
                           <li className="feedback-song" key={song.id}>
                              <a
                                 href=""
                                 onClick={e => this.showFeedback(e, song)}
                              >
                                 {song.name}
                              </a>
                              {/* <a
                                 href=""
                                 onClick={e => this.deleteFeedback(e, song)}
                              >
                                 Delete Feedback
                              </a> */}
                           </li>
                        );
                     }
                     return false;
                  })}
               </ul>
            </div>
            <Switch>
               <Route
                  path="/dashboard/feedback/:song"
                  render={props => (
                     <UserDashboardSingleFeedback
                        feedback={this.state.activeFeedback}
                        {...props}
                     />
                  )}
               />
            </Switch>
         </section>
      );
   }
}

UserDashboardFeedback.contextTypes = {
   router: PropTypes.object.isRequired,
};

UserDashboardFeedback.propTypes = {
   user: PropTypes.shape(),
};

UserDashboardFeedback.defaultProps = {
   user: false,
};

module.exports = connect(mapStateToProps)(UserDashboardFeedback);
