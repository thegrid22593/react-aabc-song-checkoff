import ReactDOM from 'react-dom';
import React from 'react';
require('../../scss/style.scss');
import AppTopBar from '../AppTopBar';
import AppSidebar from '../AppSidebar';
import MusicLibrary from './MusicLibrary';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateUserData } from '../../actions/userActions.js';

class MusicLibraryPage extends React.Component {
   constructor(props) {
      super(props);

      console.log('music library props', props);

      this.state = {
         user: {},
      };
   }

   componentWillMount() {}

   updateUserSongs(song) {
        // console.log('song', song);
        // console.log('update props', this.props);
        let updatedSongs = this.props.user.songs;
        // console.log('new songs', updatedSongs);
        let userData = this.props.user;
        console.log(userData);
        userData.songs = updatedSongs;
        userData = this.updateUserCompletedSongs(userData);
        userData = this.updateUserPercentage(userData);
        userData = this.updateLastCompletedSong(userData, song);
        this.props.dispatch(updateUserData(userData));
   }

   updateUserPercentage(user) {
        let songsLength = user.songs.length;
        let songsCompleted = user.completedSongs;
        let newPercentage = Math.floor((songsCompleted / songsLength) * 100);
        user.percentage = newPercentage;
        return user;
   }

   updateUserCompletedSongs(user) {
        let songsCompleted = user.songs.filter(song => song.completed === true).length;
        user.completedSongs = songsCompleted;
        return user;
   }

   updateLastCompletedSong(user, song) {
       let lastCompletedSong = song.name;
       user.lastCompletedSong = lastCompletedSong;
       return user;
   }


   render() {
      return (
         <div>
            <AppTopBar />
            <div className="user-dashboard-sidebar-container">
               <AppSidebar user={this.props.user} />
            </div>
            <MusicLibrary updateUserSongs={this.updateUserSongs.bind(this)} songs={this.props.user.songs} />
         </div>
      );
   }
}

MusicLibraryPage = withRouter(
   connect(store => {
      return {
         user: store.user.user,
      };
   })(MusicLibraryPage)
);

module.exports = MusicLibraryPage;
