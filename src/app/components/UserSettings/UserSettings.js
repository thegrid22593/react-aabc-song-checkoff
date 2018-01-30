import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateUserData } from '../../actions/userActions';

class UserSettings extends React.Component {
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
   }

   handleChange(e) {
      let change = {};
      change[e.target.name] = e.target.value;
      this.setState(change);
   }

   updateSettings() {
      //   if (!this.props.user.uid) {
      //      let user = {
      //         uid: null,
      //      };
      //   }
      let newUser = {
         ...this.props.user,
         ...this.state,
      };
      console.log('newUser', newUser);
      this.props.dispatch(updateUserData(newUser));
   }

   render() {
      return (
         <div className="settings">
            <div className="settings-content">
               <h1>Public Profile</h1>
               {/* <h1>Hello {{currentUserName}}</h1> */}
               <form>
                  <div className="user-pic-container">
                     <img className="profile-pic" src="" alt="" />
                     <span>
                        <i className="fa fa-camera" aria-hidden="true" />Upload
                        Photo
                     </span>
                  </div>

                  <input type="text" name="name" />
                  {/* <input type="file" id="filebutton"/> */}
                  {/* <div>{{uploadProgress}}</div> */}
                  <button type="button">Update</button>
               </form>

               <form action="" className="user-settings">
                  <div>
                     <label for="firstName">First Name</label>
                     <input
                        type="text"
                        onChange={this.handleChange.bind(this)}
                        name="firstName"
                        value={this.state.firstName}
                     />
                  </div>
                  <div>
                     <label for="lastName">Last Name</label>
                     <input
                        type="text"
                        onChange={this.handleChange.bind(this)}
                        name="lastName"
                        value={this.state.lastName}
                     />
                  </div>
                  <div>
                     <label for="startDate">Start Date</label>
                     <input
                        type="text"
                        onChange={this.handleChange.bind(this)}
                        name="startDate"
                        value={this.state.startDate}
                     />
                  </div>
                  <div>
                     <label for="singingPart">Part</label>
                     <input
                        type="text"
                        onChange={this.handleChange.bind(this)}
                        name="singingPart"
                        value={this.state.singingPart}
                     />
                  </div>
                  <div>
                     <label for="partLeader">Partleader?</label>
                     <input
                        type="radio"
                        onChange={this.handleChange.bind(this)}
                        name="partLeader"
                        value="true"
                     />{' '}
                     Yes <br />
                     <input
                        type="radio"
                        onChange={this.handleChange.bind(this)}
                        name="partLeader"
                        value="false"
                     />{' '}
                     No
                  </div>
                  <div>
                     <button
                        onClick={this.updateSettings.bind(this)}
                        type="button"
                     >
                        Save Settings
                     </button>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

UserSettings = withRouter(
   connect(store => {
      return {
         user: store.user.user,
      };
   })(UserSettings)
);

module.exports = UserSettings;
