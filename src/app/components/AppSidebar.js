import ReactDOM from 'react-dom';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
require('../scss/style.scss');

class AppSidebar extends React.Component {
   constructor(props) {
      super(props);
   }

   checkIfPartleader(user) {
      if (user.partLeader) {
         return (
            <li>
               <NavLink to="/checkoff" activeClassName="active">
                  <i className="fa fa-check-square" aria-hidden="true" />Check
                  Off
               </NavLink>
            </li>
         );
      } else {
         return;
      }
   }

   render() {
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
               {this.checkIfPartleader(this.props.user)}
               <li>
                  <NavLink to="/solo-songs" activeClassName="active">
                     <i className="fa fa-microphone" aria-hidden="true" />Solo
                     Songs
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/white-shirt-songs" activeClassName="active">
                     <i className="fa fa-music" aria-hidden="true" />White Shirt
                     Songs
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/user-settings" activeClassName="active">
                     <i className="fa fa-cog" aria-hidden="true" />Settings
                  </NavLink>
               </li>
            </ul>

            {/* <ul class="user-details">
                    <div class="completion-percentage"><span>Completion</span> {{ userPercentage }}%</div>
                    <div class="completion-percentage-bar"><div class="completion" [ngStyle]="{'width': userPercentage+'%'}"></div></div>
                    <div class="songs-remaining"><span>Songs Remaining</span> {{ userSongsRemaining }}</div>
                </ul> */}
         </nav>
      );
   }
}

module.exports = AppSidebar;
