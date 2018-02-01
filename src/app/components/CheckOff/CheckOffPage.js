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
import AppTopBar from '../AppTopBar';
import AppSidebar from '../AppSidebar';

class CheckOffPage extends React.Component {
   constructor(props) {
      super(props);
      console.log('checkoff page', props);

      this.state = {
         activeCheckOffMember: null,
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
                     <ActiveCheckOffMember
                        activeMember={this.state.activeCheckOffMember}
                     />
                  </section>
               </section>
            </div>
         </div>
      );
   }
}

CheckOffPage = withRouter(
   connect(store => {
      return {
         user: store.user,
      };
   })(CheckOffPage)
);

module.exports = CheckOffPage;
