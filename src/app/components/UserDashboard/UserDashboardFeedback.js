import ReactDOM from 'react-dom';
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import UserDashboardSingleFeedback from './UserDashboardSingleFeedback';
require('../../scss/style.scss');

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
      let notes = song.notes;
      this.setState({
         activeFeedback: notes,
      });
   }

   render() {
      return (
         <section className="feedback">
            <div className="songs-with-feedback">
               <ul className="feedback-list">
                  {this.props.user.songs.map((song, index) => {
                     if (song.notes !== undefined) {
                        return (
                           <li
                              key={index}
                              onClick={() => this.showFeedback(song)}
                              className="feedback-song"
                           >
                              {song.name}
                           </li>
                        );
                     }
                  })}
               </ul>
            </div>
            <UserDashboardSingleFeedback feedback={this.state.activeFeedback} />
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

module.exports = UserDashboardFeedback;
