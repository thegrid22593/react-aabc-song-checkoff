import React from "react";
import PropTypes from "prop-types";

const UserDashboardSummaryPartMember = ({ member }) => (
  <div key={member.uid} className="part-member">
    <img className="part-member-avatar" src={member.profilePicURL} alt="" />
    <div className="part-member-name">
      {member.firstName} {member.lastName}
    </div>
    <div className="part-member-percentage">{member.percentage}%</div>
  </div>
);

UserDashboardSummaryPartMember.propTypes = {
  member: PropTypes.shape().isRequired
};

export default UserDashboardSummaryPartMember;
