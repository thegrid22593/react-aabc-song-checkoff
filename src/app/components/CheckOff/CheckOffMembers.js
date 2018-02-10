import React from 'react';
import ReactDOM from 'react-dom';
import CheckOffMember from './CheckOffMember';
import PropTypes from 'prop-types';
require('../../scss/style.scss');

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
      } else {
         return <h1>no part members currently available</h1>;
      }
   }
}

CheckOffMember.propTypes = {
   showMemberSongs: React.PropTypes.func.isRequired,
   members: React.PropTypes.arrayOf(PropTypes.object),
};

module.exports = CheckOffMembers;
