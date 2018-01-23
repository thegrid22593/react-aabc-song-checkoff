import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
require('../scss/style.scss');
import UserDashboardHeader from './UserDashboardHeader';
import UserDashboardSidebar from './UserDashboardSidebar';
import MusicLibrary from './MusicLibrary';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class MusicLibraryPage extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {

            }
        }
    }

    componentWillMount() {
        
    }

    render() {
        return (
            <div>
                <UserDashboardHeader />
                <div className="user-dashboard-sidebar-container">
                    <UserDashboardSidebar user={this.props.user}/>
                </div>
                <MusicLibrary songs={this.props.user.songs}/>
            </div>
        )
    }
}

MusicLibraryPage = withRouter(connect((store) => {
    return {
        user: store.user.user,
    };
  })(MusicLibraryPage));

module.exports = MusicLibraryPage;