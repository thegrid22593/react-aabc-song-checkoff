import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CheckOffSong from './CheckOffSong';
import CheckOffMembers from './CheckOffMembers';
import CheckOffFeedback from './CheckOffFeedback';
import CheckOffPartLeaderProfile from './CheckOffPartLeaderProfile';
import { getAllMembersByPartName } from '../../actions/userActions';
import ActiveCheckOffMember from './ActiveCheckOffMember';
import SelectedCheckOffSong from './SelectedCheckOffSong';
import AppTopBar from '../AppTopBar';
import AppSidebar from '../AppSidebar';
import { updateOtherUserData } from '../../actions/userActions';
import { Switch, Route } from 'react-router-dom';

class CheckOffPage extends React.Component {
   constructor(props) {
      super(props);
      console.log('checkoff page', props);

      this.state = {
         activeCheckOffMember: null,
         activeCheckOffSong: null,
      };
   }

   componentWillMount() {
      let userSingingPart = this.props.user.user.singingPart;
      this.props.dispatch(getAllMembersByPartName(userSingingPart));
   }

   showMemberSongs(member) {
      console.log('member', member);
      this.setState({
         activeCheckOffMember: member,
      });
      this.context.router.history.push('/checkoff/' + member.uid);
   }

   selectActiveSong(song) {
      console.log('song', song);
      this.setState({
         activeCheckOffSong: song,
      });
   }

   sendFeedback(e, feedback, song) {
      console.log(e);
      console.log(feedback);
      console.log(song);
      console.log(this.state.activeCheckOffMember);

      if (feedback.message !== '' && feedback.title !== '') {
         if (this.state.activeCheckOffMember !== undefined) {
            let newFeedback = {
               ...feedback,
               read: false,
            };

            let songName = song.name;
            let newSongs = this.state.activeCheckOffMember.songs.map(song => {
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
               } else {
                  return song;
               }
            });

            let newActiveMemberData = {
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
                     showMemberSongs={this.showMemberSongs.bind(this)}
                     members={this.props.user.partMembers}
                  />
                  <section className="active-check-off-member">
                     <Switch>
                        <Route
                           path="/checkoff/:user"
                           exact
                           render={props => (
                              <ActiveCheckOffMember
                                 activeMember={this.state.activeCheckOffMember}
                                 selectCheckOffSong={this.selectActiveSong.bind(
                                    this
                                 )}
                                 {...props}
                              />
                           )}
                        />
                     </Switch>
                  </section>
                  <section className="selected-check-off-song">
                     <SelectedCheckOffSong
                        activeSong={this.state.activeCheckOffSong}
                        sendFeedback={this.sendFeedback.bind(this)}
                     />
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

CheckOffPage = withRouter(
   connect(store => {
      return {
         user: store.user,
      };
   })(CheckOffPage)
);

module.exports = CheckOffPage;
