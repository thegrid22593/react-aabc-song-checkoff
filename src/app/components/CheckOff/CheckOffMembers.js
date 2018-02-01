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
      return (
         <div className="part-members">
            <div className="container-full">
               <div className="col-lg-3 col-md-6 col-sm-12">
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
            </div>
         </div>
      );
   }
}

module.exports = CheckOffMembers;
