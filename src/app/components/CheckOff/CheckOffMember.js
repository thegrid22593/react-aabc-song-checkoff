import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');
import { Switch, Route } from 'react-router-dom';
import ActiveCheckOffMember from './ActiveCheckOffMember';

class CheckOffMember extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div
            className="member"
            onClick={() => this.props.showMemberSongs(this.props.member)}
         >
            <img src={this.props.member.profilePicURL} alt="user-avatar" />
            <h4>
               {this.props.member.firstName} {this.props.member.lastName}
            </h4>
            <span className="member-percentage">
               {this.props.member.percentage}%
            </span>
            <span className="song-completed">
               {this.props.member.completedSongs} /{' '}
               {this.props.member.songs.length}
            </span>
            <span className="start-date">{this.props.member.startDate}</span>
         </div>
      );
   }
}

module.exports = CheckOffMember;
