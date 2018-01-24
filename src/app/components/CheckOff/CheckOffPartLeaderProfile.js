import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');


class CheckOffPartLeaderProfile extends React.Component {
    constructor(props) {
        super(props);
        console.log('profile', props);
    }

    render() {
        return(
            <div className="checkoff-menu-bar">
                <div className="container-full">
                    <div className="part-info">
                        <div className="part-leader-avatar"><img src={this.props.user.profilePicURL} alt="part-leader-profile-pic"/></div>
                        <div className="part-leader-name">{ this.props.user.firstName }</div>
                        <div className="part-leader-part">{ this.props.user.singingPart }</div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = CheckOffPartLeaderProfile;