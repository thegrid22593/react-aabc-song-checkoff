import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import UserDashboardSingleFeedback from './UserDashboardSingleFeedback'
import '../../scss/style.scss';

class UserDashboardFeedback extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         user: {},
         activeFeedback: [],
      };

      console.log('feedback', props);
   }

   componentWillMount() {}

   showFeedback(song) {
      console.log(song.notes);
      const notes = song.notes;
      this.setState({
         activeFeedback: notes,
      });
      console.log('feedback', this.state.activeFeedback);
   }

   render() {
      return (
         <section className="feedback">
               <div className="songs-with-feedback">
                  <h5>Feedback Messages</h5>
                  <ul className="feedback-list">
                     {this.props.user.songs.map((song, index) => {
                        if (song.notes !== undefined) {
                           return (
                              <li className="feedback-song">
                                    <a href="" onClick={() => this.showFeedback(song)}>{song.name}</a>
                              </li>
                           );
                        }
                     })}
                  </ul>
               </div>
               <UserDashboardSingleFeedback
                  feedback={this.state.activeFeedback}
               />
         </section>
      );
   }
}

UserDashboardFeedback = withRouter(
   connect(store => {
      return {
         user: store.user.user,
      };
   })(UserDashboardFeedback)
);

UserDashboardFeedback.propTypes = {
      user: PropTypes.obj.isRequired
}

module.exports = UserDashboardFeedback;
