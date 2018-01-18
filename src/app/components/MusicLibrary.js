import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
require('../scss/style.scss');
class MusicLibrary extends React.Component {
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
            <div>Music Library</div>
        )
    }
}

module.exports = MusicLibrary;