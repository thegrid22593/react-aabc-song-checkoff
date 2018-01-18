import ReactDOM from 'react-dom';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import fire from '../../fire';
require('../scss/style.scss');

class UserDashboardSidebar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav class="sidebar-nav">
                <ul class="nav-links">
                    <li>
                        <NavLink to="/dashboard" activeClassName="active"><i class="fa fa-signal" aria-hidden="true"></i>Dashboard</NavLink>
                    </li>
                    <li>
                    <NavLink to="/music-library" activeClassName="active"><i class="fa fa-music" aria-hidden="true"></i>Music Library</NavLink>
                    </li>
                    <li>
                        <NavLink to="/checkoff" activeClassName="active"><i class="fa fa-check-square" aria-hidden="true"></i>Check Off</NavLink>
                    </li>
                    <li>
                        <NavLink to="/solo-songs" activeClassName="active"><i class="fa fa-microphone" aria-hidden="true"></i>Solo Songs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/white-shirt-songs" activeClassName="active"><i class="fa fa-music" aria-hidden="true"></i>White Shirt Songs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-settings" activeClassName="active"><i class="fa fa-cog" aria-hidden="true"></i>Settings</NavLink>
                    </li>
                </ul>

                {/* <ul class="user-details">
                    <div class="completion-percentage"><span>Completion</span> {{ userPercentage }}%</div>
                    <div class="completion-percentage-bar"><div class="completion" [ngStyle]="{'width': userPercentage+'%'}"></div></div>
                    <div class="songs-remaining"><span>Songs Remaining</span> {{ userSongsRemaining }}</div>
                </ul> */}
            </nav>
        )
    }
}


module.exports = UserDashboardSidebar;