import React from 'react';
import PropTypes from 'prop-types';
import CheckOffMember from './CheckOffMember';
import '../../scss/style.scss';

class CheckOffMembers extends React.Component {
   constructor(props) {
      super(props);
      console.log('props', props);
   }

   render() {
      if (this.props.members) {
         return (
            <div className="part-members">
               {this.props.members.map((member, index) => {
                  return (
                     <CheckOffMember
                        key={index}
                        member={member}
                        showMemberSongs={() => {
                           this.props.showMemberSongs(member);
                        }}
                     />
                  );
               })}
            </div>
         );
      }
    return <h1>no part members currently available</h1>;
   }
}

CheckOffMember.propTypes = {
    showMemberSongs: PropTypes.func.isRequired,
    members: PropTypes.arrayOf(PropTypes.object),
 };

module.exports = CheckOffMembers;
