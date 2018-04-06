import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { updateUserData } from '../../actions/userActions';

const mapStateToProps = state => ({
   user: state.user.user,
});

class UserSettings extends Component {
   constructor(props) {
      super(props);

      this.state = {
         uid: this.props.user.uid,
         firstName: this.props.user.firstName || '',
         lastName: this.props.user.lastName || '',
         startDate: this.props.user.startDate || '',
         singingPart: this.props.user.singingPart || '',
         partLeader: this.props.user.partLeader || null,
      };

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
      const change = {};
      change[e.target.name] = e.target.value;
      this.setState(change);
   }

   updateSettings() {
      const newUser = {
         ...this.props.user,
         ...this.state,
      };
      this.props.dispatch(updateUserData(newUser));
   }

   render() {
      return (
         <div className="settings">
            <div className="settings-content">
               <h1>Public Profile</h1>
               <h1>
                  Hello {this.props.user.firstName} {this.props.user.lastName}
               </h1>
               <form>
                  <div className="user-pic-container">
                     <img
                        className="profile-pic"
                        src={this.props.user.profilePicURL}
                        alt=""
                     />
                     <span>
                        <i className="fa fa-camera" aria-hidden="true" />
                        Upload Photo
                     </span>
                  </div>

                  {/* <input type="text" name="name" /> */}
                  {/* <input type="file" id="filebutton"/> */}
                  {/* <div>{{uploadProgress}}</div> */}
                  {/* <button type="button">Update</button> */}
               </form>

               <form action="" className="user-settings">
                  <div>
                     <label htmlFor="firstName">First Name</label>
                     <input
                        type="text"
                        onChange={this.handleChange}
                        name="firstName"
                        value={this.state.firstName}
                     />
                  </div>
                  <div>
                     <label htmlFor="lastName">Last Name</label>
                     <input
                        type="text"
                        onChange={this.handleChange}
                        name="lastName"
                        value={this.state.lastName}
                     />
                  </div>
                  <div>
                     <label htmlFor="startDate">Start Date</label>
                     <input
                        type="text"
                        onChange={this.handleChange}
                        name="startDate"
                        value={this.state.startDate}
                     />
                  </div>
                  <div>
                     <label htmlFor="singingPart">Part</label>
                     <input
                        type="text"
                        onChange={this.handleChange}
                        name="singingPart"
                        value={this.state.singingPart}
                     />
                  </div>
                  <div>
                     <label htmlFor="partLeader">Partleader?</label>
                     <input
                        type="radio"
                        onChange={this.handleChange}
                        name="partLeader"
                        value="true"
                     />{' '}
                     Yes <br />
                     <input
                        type="radio"
                        onChange={this.handleChange}
                        name="partLeader"
                        value="false"
                     />{' '}
                     No
                  </div>
                  <div>
                     <button onClick={this.updateSettings} type="button">
                        Save Settings
                     </button>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

UserSettings.propTypes = {
   user: PropTypes.shape().isRequired,
   dispatch: PropTypes.func.isRequired,
};

module.exports = withRouter(connect(mapStateToProps)(UserSettings));
