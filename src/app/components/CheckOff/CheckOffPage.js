import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import CheckOffMembers from './CheckOffMembers';
import CheckOffPartLeaderProfile from './CheckOffPartLeaderProfile';
import {
   getAllMembersByPartName,
   updateOtherUserData,
} from '../../actions/userActions';
import ActiveCheckOffMember from './ActiveCheckOffMember';
import SelectedCheckOffSong from './SelectedCheckOffSong';
import AppTopBar from '../AppTopBar';
import AppSidebar from '../AppSidebar';
import '../../scss/style.scss';

class CheckOffPage extends React.Component {
   constructor(props) {
      super(props);
      console.log('checkoff page', props);

      this.state = {
         activeCheckOffMember: null,
         activeCheckOffSong: null,
      };

      this.showMemberSongs = this.showMemberSongs.bind(this);
      this.selectActiveSong = this.selectActiveSong.bind(this);
      this.sendFeedback = this.sendFeedback.bind(this);
   }

   componentWillMount() {
      const userSingingPart = this.props.user.user.singingPart;
      this.props.dispatch(getAllMembersByPartName(userSingingPart));
   }

   showMemberSongs(e, member) {
      e.preventDefault();
      console.log('member', member);
      this.setState({
         activeCheckOffMember: member,
      });
      this.context.router.history.push(`/checkoff/${member.uid}`);
   }

   selectActiveSong(e, song, member) {
      e.preventDefault();
      console.log('song', song);
      this.setState({
         activeCheckOffSong: song,
      });
      this.context.router.history.push(`/checkoff/${member.uid}/${song.name}`);
   }

   sendFeedback(e, feedback, songWithFeedback) {
      console.log(e);
      console.log(feedback);
      console.log(songWithFeedback);
      console.log(this.state.activeCheckOffMember);

      if (feedback.message !== '' && feedback.title !== '') {
         if (this.state.activeCheckOffMember !== undefined) {
            const newFeedback = {
               ...feedback,
               read: false,
            };

            const songName = songWithFeedback.name;
            const newSongs = this.state.activeCheckOffMember.songs.map(song => {
               if (song.name === songName) {
                  if (!song.notes) {
                     song.notes = [];
                     newFeedback.id = 1;
                     song.notes.push(newFeedback);
                  } else {
                     newFeedback.id = song.notes.length + 1;
                     song.notes.push(newFeedback);
                  }
                  return song;
               }
               return song;
            });

            const newActiveMemberData = {
               ...this.state.activeCheckOffMember,
               songs: newSongs,
            };

            console.log('new active member', newActiveMemberData);

            this.props.dispatch(updateOtherUserData(newActiveMemberData));
         }
      }
   }

   render() {
      return (
         <div className="app-row">
            <AppTopBar />
            <div className="user-dashboard-sidebar-container">
               <AppSidebar user={this.props.user.user} />
            </div>
            <div className="app-content-container">
               <section className="checkoff-part-leader-bar">
                  <CheckOffPartLeaderProfile user={this.props.user.user} />
               </section>
               <section className="checkoff-members">
                  <CheckOffMembers
                     showMemberSongs={this.showMemberSongs}
                     members={this.props.user.partMembers}
                  />
                  <section className="active-check-off-member">
                     <Switch>
                        <Route
                           path="/checkoff/:user"
                           render={props => (
                              <ActiveCheckOffMember
                                 activeMember={this.state.activeCheckOffMember}
                                 selectCheckOffSong={this.selectActiveSong}
                                 {...props}
                              />
                           )}
                        />
                     </Switch>
                  </section>
                  <section className="selected-check-off-song">
                     <Switch>
                        <Route
                           path="/checkoff/:user/:songName"
                           render={props => (
                              <SelectedCheckOffSong
                                 activeSong={this.state.activeCheckOffSong}
                                 sendFeedback={this.sendFeedback}
                                 {...props}
                              />
                           )}
                        />
                     </Switch>
                  </section>
               </section>
            </div>
         </div>
      );
   }
}

CheckOffPage.contextTypes = {
   router: React.PropTypes.object.isRequired,
};

CheckOffPage.propTypes = {
   dispatch: PropTypes.func.isRequired,
   user: PropTypes.shape().isRequired,
};

CheckOffPage = withRouter(
   connect(store => {
      return {
         user: store.user,
      };
   })(CheckOffPage)
);

module.exports = CheckOffPage;
