import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckOffMember from './CheckOffMember';
import '../../scss/style.scss';

class CheckOffMembers extends Component {
   constructor(props) {
      super(props);

      this.state = {
         activeMemberIndex: 0,
      };
   }

   showMemberSongs(e, member) {
      this.setState({ activeMemberIndex: member.uid });
      this.props.showMemberSongs(e, member);
   }

   render() {
      if (this.props.members) {
         return (
            <div className="part-members">
               {this.props.members.map(member => (
                  <CheckOffMember
                     active={
                        member.uid === this.state.activeMemberIndex
                           ? true
                           : false
                     }
                     key={member.uid}
                     member={member}
                     activeIndex={this.state.activeMemberIndex}
                     showMemberSongs={e => {
                        this.showMemberSongs(e, member);
                     }}
                  />
               ))}
            </div>
         );
      }
      return <h1>no part members currently available</h1>;
   }
}

CheckOffMembers.propTypes = {
   showMemberSongs: PropTypes.func.isRequired,
   members: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

module.exports = CheckOffMembers;
