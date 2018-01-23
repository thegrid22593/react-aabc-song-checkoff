import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

class UserSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUserFirstName: '',
            currentUserLastName: '',
            currentUserStartDate: '',
            currentUserPart: '',
            isPartLeader: null,

        }
    }

    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    updateSettings() {
        if(!this.props.user.uid) {
            let user = {
                uid: null
            }
           user.uid = sessionStorage.getItem('userID');
           firebase.firestore().collection('users').doc(user.uid).set({
               completedSongs: 0,
               firstName: this.state.currentUserFirstName,
               lastCompletedSongs: null,
               lastName: this.state.currentUserLastName,
               partLeader: this.state.isPartLeader,
               profilePicURL: null,
               singingPart: this.state.currentUserPart,
               songs: [],
               startDate: this.state.currentUserStartDate,
               uid: user.uid
           }).then((user) => {
               console.log('user data:', user.data());
           }).catch((error)=> {
               console.log('could not create user data', error);
           });
        }
        
    }
    
    render() {
        return (
            <div className="settings">
                    <h1>Public Profile</h1>
                    {/* <h1>Hello {{currentUserName}}</h1> */}
                    <form>
                        <div className="user-pic-container">
                            <img className="profile-pic" src="" alt=""/>
                            <span><i className="fa fa-camera" aria-hidden="true"></i>Upload Photo</span>
                        </div>

                        <input type="text" name="name"/>
                        {/* <input type="file" id="filebutton"/> */}
                        {/* <div>{{uploadProgress}}</div> */}
                        <button type="button">Update</button>
                    </form>

                    <form action="" className="user-settings">
                    <div>
                        <label for="currentUserFirstName">First Name</label>
                        <input type="text" onChange={this.handleChange.bind(this)} name="currentUserFirstName"/>
                    </div>
                    <div>
                        <label for="currentUserLastName">Last Name</label>
                        <input type="text" onChange={this.handleChange.bind(this)} name="currentUserLastName"/>
                    </div>
                    <div>
                        <label for="currentUserStartDate">Start Date</label>
                        <input type="text" onChange={this.handleChange.bind(this)} name="currentUserStartDate"/>
                    </div>
                    <div>
                        <label for="currentUserPart">Part</label>
                        <input type="text" onChange={this.handleChange.bind(this)} name="currentUserPart"/>
                    </div>
                    <div>
                        <label for="is-partleader">Partleader?</label>
                        <input type="radio" onChange={this.handleChange.bind(this)} name="isPartLeader" value="true"/> Yes <br/>
                        <input type="radio" onChange={this.handleChange.bind(this)} name="isPartLeader" value="false"/> No
                    </div>
                    <div>
                        <button onClick={this.updateSettings.bind(this)}type="button">Save Settings</button>
                    </div>
                    </form>
                </div>
        )
    }
}

module.exports = UserSettings;