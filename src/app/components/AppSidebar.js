import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../scss/style.scss';

class AppSidebar extends Component {
   checkIfPartleader() {
      if (this.props.user.partLeader) {
         return (
            <li>
               <NavLink to="/checkoff" activeClassName="active">
                  <i className="fa fa-check-square" aria-hidden="true" />Check
                  Off
               </NavLink>
            </li>
         );
      }
      return false;
   }

   render() {
      //    const songsRemaining = this.props.user.songs.length - this.props.user.completedSongs;
      return (
         <nav className="sidebar-nav">
            <ul className="nav-links">
               <li>
                  <NavLink to="/dashboard" activeClassName="active">
                     <i className="fa fa-signal" aria-hidden="true" />Dashboard
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/music-library" activeClassName="active">
                     <i className="fa fa-music" aria-hidden="true" />Music
                     Library
                  </NavLink>
               </li>
               {this.checkIfPartleader()}
               {/* <li>
                  <NavLink to="/solo-songs" activeClassName="active">
                     <i className="fa fa-microphone" aria-hidden="true" />Solo
                     Songs
                  </NavLink>
               </li> */}
               {/* <li>
                  <NavLink to="/white-shirt-songs" activeClassName="active">
                     <i className="fa fa-music" aria-hidden="true" />White Shirt
                     Songs
                  </NavLink>
               </li> */}
               <li>
                  <NavLink to="/user-settings" activeClassName="active">
                     <i className="fa fa-cog" aria-hidden="true" />Settings
                  </NavLink>
               </li>
            </ul>

            <ul className="user-details">
               <div className="completion-percentage">
                  <span>Completion</span> {this.props.user.percentage}%
               </div>
               <div className="completion-percentage-bar">
                  <div
                     className="completion"
                     style={{ width: `${this.props.user.percentage}%` }}
                  />
               </div>
               {/* <div className="songs-remaining"><span>Songs Remaining</span> { songsRemaining }</div> */}
            </ul>
         </nav>
      );
   }
}

AppSidebar.propTypes = {
   user: PropTypes.shape().isRequired,
};

module.exports = AppSidebar;
