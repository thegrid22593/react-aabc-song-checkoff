import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppTopBar from '../AppTopBar';
import AppSidebar from '../AppSidebar';
import MusicLibrary from './MusicLibrary';
import { updateUserData } from '../../actions/userActions';
import '../../scss/style.scss';

const mapStateToProps = state => ({
   user: state.user.user,
});

class MusicLibraryPage extends Component {
   constructor(props) {
      super(props);

      console.log('music library props', props);

      this.state = {
         user: {},
      };

      this.updateUserSongs = this.updateUserSongs.bind(this);
   }

   componentWillMount() {}

   updateUserSongs(song) {
      // console.log('song', song);
      // console.log('update props', this.props);
      const updatedSongs = this.props.user.songs;
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
      const songsLength = this.props.user.songs.length;
      const songsCompleted = this.props.user.completedSongs;
      const newPercentage = Math.floor(songsCompleted / songsLength * 100);
      user.percentage = newPercentage;
      return user;
   }

   updateUserCompletedSongs(user) {
      let songsCompleted = user.songs.filter(song => song.completed === true)
         .length;
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
         <div className="app-row">
            <AppTopBar />
            <div className="user-dashboard-sidebar-container">
               <AppSidebar user={this.props.user} />
            </div>
            <div className="app-content-container">
               <MusicLibrary
                  updateUserSongs={this.updateUserSongs}
                  songs={this.props.user.songs}
               />
            </div>
         </div>
      );
   }
}

MusicLibraryPage.propTypes = {
   user: PropTypes.shape().isRequired,
   dispatch: PropTypes.func.isRequired,
};

module.exports = connect(mapStateToProps)(MusicLibraryPage);
