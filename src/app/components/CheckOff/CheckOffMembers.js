import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');
import CheckOffMember from './CheckOffMember';

class CheckOffMembers extends React.Component {
   constructor(props) {
      super(props);
      console.log('props', props);
   }

   render() {
      if (this.props.members.length !== 0) {
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

module.exports = CheckOffMembers;
