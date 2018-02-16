import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/style.scss';

const CheckOffMember = props => (
   <div className={`member ${props.active ? 'active' : ''}`}>
      <a href="" onClick={e => props.showMemberSongs(e, props.member)}>
         <img src={props.member.profilePicURL} alt="user-avatar" />
         <h4>
            {props.member.firstName} {props.member.lastName}
         </h4>
         <span className="member-percentage">{props.member.percentage}%</span>
         <span className="song-completed">
            {props.member.completedSongs} / {props.member.songs.length}
         </span>
         <span className="start-date">{props.member.startDate}</span>
      </a>
   </div>
);

CheckOffMember.propTypes = {
   showMemberSongs: PropTypes.func.isRequired,
   member: PropTypes.shape(),
   active: PropTypes.bool.isRequired,
};

CheckOffMember.defaultProps = {
   member: false,
};

module.exports = CheckOffMember;
