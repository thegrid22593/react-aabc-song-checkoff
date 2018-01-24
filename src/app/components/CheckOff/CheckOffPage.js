import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');


class CheckOffPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="checkoff">
                <h1>Checkoff</h1>
                <div className="checkoff-menu-bar">
                    <div className="container-full">
                        <div className="part-info">
                            <div className="part-leader-avatar"><img alt="part-leader-profile-pic"/></div>
                            {/* <div className="part-leader-name">{{ partLeaderName }}</div> */}
                            {/* <div className="part-leader-part">{{ partLeaderPart }}</div> */}
                        </div>
                    </div>
                </div>

                <div className="part-members">
                    <div className="container-full">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="member" onClick={this.seeMemberSongs.bind(this)}>
                                <img src="" alt="user-avatar"/>
                                {/* <h4>{{member.firstName}} {{ member.lastName }}</h4> */}
                                {/* <span className="member-percentage">{{member.percentage}}%</span> */}
                                {/* <span className="song-completed">{{member.completedSongs}} / {{ member.songs.length }}</span> */}
                                {/* <span className="start-date">{{member.startDate}}</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = CheckOffPage;