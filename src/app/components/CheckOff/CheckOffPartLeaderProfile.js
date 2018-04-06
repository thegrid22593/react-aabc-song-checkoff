import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../scss/style.scss';

class CheckOffPartLeaderProfile extends Component {
   constructor(props) {
      super(props);
      console.log('profile', props);
   }

   render() {
      return (
         <div className="checkoff-menu-bar">
            <div className="container-full">
               <div className="part-info">
                  <div className="part-leader-avatar">
                     <img
                        src={this.props.user.profilePicURL}
                        alt="part-leader-profile-pic"
                     />
                  </div>
                  <div className="part-leader-name">
                     {this.props.user.firstName}
                  </div>
                  <div className="part-leader-part">
                     {this.props.user.singingPart}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

CheckOffPartLeaderProfile.propTypes = {
   user: PropTypes.shape().isRequired,
};

module.exports = CheckOffPartLeaderProfile;
