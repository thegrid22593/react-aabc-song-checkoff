import React, { Component } from "react";
import PropTypes from "prop-types";
import UserDashboardSummaryPartMember from "./UserDashboardSummaryPartMember";

function calculatePercentage(totalCompletedSongs, totalSongs) {
  return Math.floor(totalCompletedSongs / totalSongs * 100);
}

class UserDashboardSummaryPartCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      singingPart: props.singingPart,
      partMembers: props.users,
      partName: props.partName,
      averagePercentage: null
    };
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    if (newProps.users.length > 0) {
      const partMembers = newProps.users.filter(user => {
        if (user.singingPart === this.props.singingPart) {
          return user;
        }
      });
      console.log("partmembers", partMembers);
      console.log("STATE", this.state);
      this.setState({ partMembers });
      this.getAveragePercentage(partMembers);
    }
  }

  getAveragePercentage(partMembers) {
    let completedSongs = 0;
    let totalSongs = 0;

    partMembers.forEach(member => {
      completedSongs += member.completedSongs;
      totalSongs += member.songs.length;
    });

    const averagePercentage = calculatePercentage(completedSongs, totalSongs);

    this.setState({ averagePercentage });
  }

  render() {
    return (
      <div className="part-container">
        <div className="part-container-header clearfix">
          <h3 className="part-name">{this.state.partName}</h3>
          <h5 className="part-average-percentage">
            {this.state.averagePercentage}%
          </h5>
        </div>
        <div className="part-table">
          <div className="part-table-name">Name</div>
          <div className="part-table-percentage">Percentage</div>
        </div>
        {this.state.partMembers.map(member => (
          <UserDashboardSummaryPartMember member={member} key={member.uid} />
        ))}
      </div>
    );
  }
}

UserDashboardSummaryPartCard.propTypes = {
  singingPart: PropTypes.string.isRequired,
  partName: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

module.exports = UserDashboardSummaryPartCard;
