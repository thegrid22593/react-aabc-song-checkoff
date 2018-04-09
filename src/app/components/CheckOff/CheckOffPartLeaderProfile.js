import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/style.scss';

const CheckOffPartLeaderProfile = ({ user }) => (
   <div className="checkoff-menu-bar">
      <div className="container-full">
         <div className="part-info">
            <div className="part-leader-avatar">
               <img src={user.profilePicURL} alt="part-leader-profile-pic" />
            </div>
            <div className="part-leader-name">{user.firstName}</div>
            <div className="part-leader-part">{user.singingPart}</div>
         </div>
      </div>
   </div>
);

CheckOffPartLeaderProfile.propTypes = {
   user: PropTypes.shape().isRequired,
};

module.exports = CheckOffPartLeaderProfile;
