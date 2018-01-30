import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');
import { updateUserData } from '../../actions/userActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchSongs } from '../../actions/songActions';
import firebase from 'firebase';

class UserSignUpContinued extends React.Component {
   constructor(props) {
      super(props);

      this.storage = firebase.storage().ref();

      let date = new Date();
      date = date.getMonth() + ' ' + date.getDay() + ' ' + date.getFullYear();

      this.state = {
         firstName: '',
         lastName: '',
         singingPart: '',
         partLeader: null,
         lastCompletedSong: '',
         percentage: 0,
         completedSongs: 0,
         profilePicURL: '',
         startDate: date,
      };
   }

   handleChange(e) {
      let change = {};
      if (e.target.name === 'partLeader' && e.target.value === 'true') {
         change[e.target.name] = true;
      } else if (
         (e.target.name === 'partLeader' && e.target.value === 'false') ||
         e.target.value === null
      ) {
         change[e.target.name] = false;
      } else {
         change[e.target.name] = e.target.value;
      }
      console.log('change', change);
      this.setState(change);
   }

   getCheckOffSongs() {
      // If user does not have a song library go and grab the songs and attach them to the userData
      if (this.props.user.songs === undefined) {
         try {
            this.props.dispatch(fetchSongs());
         } catch (error) {
            console.log('could not fetch the songs');
         }
      }
   }

   updateUserInfo() {
      console.log('working', this.props);
      let songsArr = this.props.songs;
      let user = {
         uid: this.props.user.userAuth.uid,
         songs: songsArr,
         ...this.props.user.user,
         ...this.state,
      };
      console.log('user', user);
      try {
         this.props.dispatch(updateUserData(user));
      } catch (error) {
         console.log('could not update the user');
      } finally {
         console.log('all updated');
      }
   }

   componentDidMount() {
      this.getCheckOffSongs();
   }

   filebuttoni(event) {
      console.log(event);
      let files = event.target.files[0];
      let self = this;
      let uploader = document.getElementById('uploader');
      let path = 'user-profile-pics/' + files.name;
      let storageref = this.storage.child(path);
      let uploadTask = storageref.put(files);

      uploadTask.on(
         firebase.storage.TaskEvent.STATE_CHANGED,
         snapshot => {
            console.log(snapshot);
            console.log(snapshot.totalBytes);

            this.uploadProgress =
               snapshot.bytesTransferred / snapshot.totalBytes * 100;

            console.log('Upload is ' + this.uploadProgress + '% done!');

            switch (snapshot.state) {
               case firebase.storage.TaskState.PAUSED:
                  console.log('upload is paused');
                  break;
               case firebase.storage.TaskState.RUNNING:
                  console.log('Upload is running');
                  break;
            }
         },
         error => {
            switch (error) {
               case 'storage/unauthorized':
                  break;

               case 'storage/canceled':
                  break;

               case 'storage/unknown':
                  break;
            }
         },
         () => {
            console.log('THIS', this);
            let downloadURL = uploadTask.snapshot.downloadURL;
            console.log('Upload done!');
            storageref.getDownloadURL().then(url => {
               this.setState({ profilePicURL: url });
            });
         }
      );
   }

   render() {
      return (
         <div class="user-sign-up-more-info-form">
            <h2>Please Fill In More Information About Yourself.</h2>
            <form>
               <label for="filebutton">Upload a Profile Picture</label>
               <input
                  type="file"
                  id="filebutton"
                  onChange={e => this.filebuttoni(e)}
               />
               <label for="first-name">First Name</label>
               <input
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  id="first-name"
                  name="firstName"
               />
               <label for="last-name">Last Name</label>
               <input
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  id="last-name"
                  name="lastName"
               />
               <label class="singing-part-label">Singing Part</label>
               <input
                  type="radio"
                  onChange={this.handleChange.bind(this)}
                  name="singingPart"
                  value="First Tenor"
               />
               <span>First Tenor</span>
               <input
                  type="radio"
                  onChange={this.handleChange.bind(this)}
                  name="singingPart"
                  value="Second Tenor"
               />
               <span>Second Tenor</span>
               <input
                  type="radio"
                  onChange={this.handleChange.bind(this)}
                  name="singingPart"
                  value="Baritone"
               />
               <span>Baritone</span>
               <input
                  type="radio"
                  onChange={this.handleChange.bind(this)}
                  name="singingPart"
                  value="Bass"
               />
               <span>Bass</span>
               <label for="is-partleader">Partleader?</label>
               <input
                  type="radio"
                  onChange={this.handleChange.bind(this)}
                  value="true"
                  name="partLeader"
               />{' '}
               Yes
               <button type="button" onClick={this.updateUserInfo.bind(this)}>
                  Save
               </button>
            </form>
         </div>
      );
   }
}

UserSignUpContinued = withRouter(
   connect(store => {
      return {
         user: store.user,
         songs: store.songs.songs,
      };
   })(UserSignUpContinued)
);

module.exports = UserSignUpContinued;
