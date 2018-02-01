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
         <div>
            <AppTopBar />
            <div className="user-dashboard-sidebar-container">
               <AppSidebar user={this.props.user.user} />
            </div>
            <section className="checkoff-members">
               <CheckOffPartLeaderProfile user={this.props.user.user} />
               <CheckOffMembers
                  showMemberSongs={this.showMemberSongs.bind(this)}
                  members={this.props.user.partMembers}
               />
            </section>
            <section className="active-check-off-member">
               <ActiveCheckOffMember
                  activeMember={this.state.activeCheckOffMember}
               />
            </section>
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
