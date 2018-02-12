import React from "react";

const UserDashboardPartPercentageBar = () => (
  <div className="part-percentage-bar">
    <div
      className="part-percentage"
      style={{
        width: `${this.props.averagePercentage}%`,
        backgroundColor: this.props.color
      }}
    >
      <div className="percentage-container">
        <div className="percentage">{`${this.props.averagePercentage}%`}</div>
      </div>
    </div>
  </div>
);

module.exports = UserDashboardPartPercentageBar;
