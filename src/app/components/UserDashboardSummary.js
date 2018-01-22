import ReactDOM from 'react-dom';
import React from 'react';
import { Link , NavLink} from 'react-router-dom';
require('../scss/style.scss');

class UserDashboardSummary extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
       
    }

    render() {
        return (
            <div className="dashboard-member-part-info">
                <div className="container-full">

                    <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="part-container">
                        <div className="part-container-header clearfix">
                            <h3 className="col-lg-6">Basses</h3>
                            {/* <h5 className="col-lg-6">{{bassAvgPercentage}}%</h5> */}
                        </div>
                        <div className="part-table">
                            <div className="col-lg-8">Name</div>
                            <div className="col-lg-4">Percentage</div>
                        </div>
                        <div className="col-lg-12 part-member">
                            {/* <div className="col-lg-2"><img className="part-member-avatar" src="{{bassMember.profilePicURL}}" alt=""></div> */}
                            {/* <div className="col-lg-6">{{bassMember.firstName}} {{bassMember.lastName}}</div> */}
                            {/* <div className="col-lg-4">{{bassMember.percentage}}%</div> */}
                            {/* <div className="col-lg-4">0%</div> */}
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="part-container">
                        <div className="part-container-header clearfix">
                            <h3 className="col-lg-6">Second Tenor</h3>
                            {/* <h5 className="col-lg-6">{{secondTenorAvgPercentage}}%</h5> */}
                        </div>
                        <div className="part-table">
                            <div className="col-lg-8">Name</div>
                            <div className="col-lg-4">Percentage</div>
                        </div>
                        <div className="col-lg-12 part-member">
                            {/* <div className="col-lg-2"><img className="part-member-avatar" src="{{secondTenorMember.profilePicURL}}" alt=""></div> */}
                            {/* <div className="col-lg-6">{{secondTenorMember.firstName}} {{secondTenorMember.lastName}}</div> */}
                            {/* <div className="col-lg-4">{{secondTenorMember.percentage}}%</div> */}
                            <div className="col-lg-4">0%</div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="part-container">
                        <div className="part-container-header clearfix">
                            <h3 className="col-lg-6">First Tenor</h3>
                            {/* <h5 className="col-lg-6">{{firstTenorAvgPercentage}}%</h5> */}
                        </div>
                        <div className="part-table">
                            <div className="col-lg-8">Name</div>
                            <div className="col-lg-4">Percentage</div>
                        </div>
                        <div className="col-lg-12 part-member">
                            {/* <div className="col-lg-2"><img className="part-member-avatar" src="{{firstTenorMember.profilePicURL}}" alt=""></div> */}
                            {/* <div className="col-lg-6">{{firstTenorMember.firstName}} {{firstTenorMember.lastName}}</div> */}
                            {/* <div className="col-lg-4">{{firstTenorMember.percentage}}%</div> */}
                            <div className="col-lg-4">0%</div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="part-container">
                        <div className="part-container-header clearfix">
                            <h3 className="col-lg-6">Baritone</h3>
                            {/* <h5 className="col-lg-6">{{baritoneAvgPercentage}}%</h5> */}
                        </div>
                        <div className="part-table">
                            <div className="col-lg-8">Name</div>
                            <div className="col-lg-4">Percentage</div>
                        </div>
                        <div className="col-lg-12 part-member">
                            {/* <div className="col-lg-2"><img className="part-member-avatar" src="{{baritoneMember.profilePicURL}}" alt=""></div> */}
                            {/* <div className="col-lg-6">{{baritoneMember.firstName}} {{baritoneMember.lastName}}</div> */}
                            {/* <div className="col-lg-4">{{baritoneMember.percentage}}%</div> */}
                            <div className="col-lg-4">0%</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}


module.exports = UserDashboardSummary;