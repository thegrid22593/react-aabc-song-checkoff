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
               {this.props.members.map(member => {
                  return (
                     <CheckOffMember
                        key={member.uid}
                        member={member}
                        showMemberSongs={e => {
                           this.props.showMemberSongs(e, member);
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

CheckOffMembers.propTypes = {
   showMemberSongs: PropTypes.func.isRequired,
   members: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

module.exports = CheckOffMembers;
