import React from 'react';
import '../../scss/style.scss';

const CheckOffMember = () => (
   <div className="member">
      <a href="" onClick={() => this.props.showMemberSongs(this.props.member)}>
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
      </a>
   </div>
);

module.exports = CheckOffMember;
