import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
require('../scss/style.scss');
import UserDashboardSidebar from './UserDashboardSidebar';
import MusicLibrary from './MusicLibrary';

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
            <div className="container">
                <UserDashboardHeader />
                <UserDashboardSidebar />
                <MusicLibrary />
            </div>
        )
    }
}

module.exports = MusicLibraryPage;