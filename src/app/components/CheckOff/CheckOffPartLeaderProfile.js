import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');


class CheckOffPartLeaderProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="checkoff-menu-bar">
                <div className="container-full">
                    <div className="part-info">
                        <div className="part-leader-avatar"><img alt="part-leader-profile-pic"/></div>
                        {/* <div className="part-leader-name">{{ partLeaderName }}</div> */}
                        {/* <div className="part-leader-part">{{ partLeaderPart }}</div> */}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = CheckOffPartLeaderProfile;