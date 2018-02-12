import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { updateUserData } from '../../actions/userActions';
import { fetchSongs } from '../../actions/songActions';
import '../../scss/style.scss';

const mapStateToProps = state => ({
   user: state.user,
   songs: state.songs.songs,
});

class UserSignUpContinued extends React.Component {
   constructor(props) {
      super(props);

      this.storage = firebase.storage().ref();

      let date = new Date();
      date = `${date.getMonth()} ${date.getDay()} ${date.getFullYear()}`;

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

      this.handleChange = this.handleChange.bind(this);
      this.updateUserInfo = this.updateUserInfo.bind(this);
   }

   componentDidMount() {
      this.getCheckOffSongs();
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

   handleChange(e) {
      const change = {};
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

   updateUserInfo() {
      console.log('working', this.props);
      const songsArr = this.props.songs;
      const user = {
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

   filebuttoni(event) {
      console.log(event);
      const files = event.target.files[0];
      // const self = this;
      // const uploader = document.getElementById('uploader');
      const path = `user-profile-pics/${files.name}`;
      const storageref = this.storage.child(path);
      const uploadTask = storageref.put(files);

      uploadTask.on(
         firebase.storage.TaskEvent.STATE_CHANGED,
         snapshot => {
            console.log(snapshot);
            console.log(snapshot.totalBytes);

            this.uploadProgress =
               snapshot.bytesTransferred / snapshot.totalBytes * 100;

            console.log(`Upload is${this.uploadProgress}% done!`);

            switch (snapshot.state) {
               case firebase.storage.TaskState.PAUSED:
                  console.log('upload is paused');
                  break;
               case firebase.storage.TaskState.RUNNING:
                  console.log('Upload is running');
                  break;
               default:
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
               default:
                  break;
            }
         },
         () => {
            // const downloadURL = uploadTask.snapshot.downloadURL;
            console.log('Upload done!');
            storageref.getDownloadURL().then(url => {
               this.setState({ profilePicURL: url });
            });
         }
      );
   }

   render() {
      return (
         <div className="user-sign-up-more-info-form">
            <h2>Please Fill In More Information About Yourself.</h2>
            <form>
               <label htmlFor="filebutton">Upload a Profile Picture</label>
               <input
                  type="file"
                  id="filebutton"
                  onChange={e => this.filebuttoni(e)}
               />
               <label htmlFor="first-name">First Name</label>
               <input
                  type="text"
                  onChange={this.handleChange}
                  id="first-name"
                  name="firstName"
               />
               <label htmlFor="last-name">Last Name</label>
               <input
                  type="text"
                  onChange={this.handleChange}
                  id="last-name"
                  name="lastName"
               />
               <label htmlFor="singingPart" className="singing-part-label">
                  Singing Part
               </label>
               <input
                  type="radio"
                  onChange={this.handleChange}
                  name="singingPart"
                  value="First Tenor"
               />
               <span>First Tenor</span>
               <input
                  type="radio"
                  onChange={this.handleChange}
                  name="singingPart"
                  value="Second Tenor"
               />
               <span>Second Tenor</span>
               <input
                  type="radio"
                  onChange={this.handleChange}
                  name="singingPart"
                  value="Baritone"
               />
               <span>Baritone</span>
               <input
                  type="radio"
                  onChange={this.handleChange}
                  name="singingPart"
                  value="Bass"
               />
               <span>Bass</span>
               <label htmlFor="is-partleader">Partleader?</label>
               <input
                  type="radio"
                  onChange={this.handleChange}
                  value="true"
                  name="partLeader"
               />{' '}
               Yes
               <button type="button" onClick={this.updateUserInfo}>
                  Save
               </button>
            </form>
         </div>
      );
   }
}

UserSignUpContinued.propTypes = {
   dispatch: PropTypes.func.isRequired,
   user: PropTypes.shape().isRequired,
   songs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

module.exports = withRouter(connect(mapStateToProps)(UserSignUpContinued));
