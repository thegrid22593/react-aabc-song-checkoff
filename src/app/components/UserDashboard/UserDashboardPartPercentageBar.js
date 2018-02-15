import React from 'react';
import PropTypes from 'prop-types';

const UserDashboardPartPercentageBar = props => (
   <div className="part-percentage-bar">
      <div
         className="part-percentage"
         style={{
            width: `${
               props.averagePercentage ? props.averagePercentage : '0'
            }%`,
            backgroundColor: props.color,
         }}
      >
         <div className="percentage-container">
            <div className="percentage">{`${
               props.averagePercentage ? props.averagePercentage : '0'
            }%`}</div>
         </div>
      </div>
   </div>
);

UserDashboardPartPercentageBar.propTypes = {
   averagePercentage: PropTypes.number,
   color: PropTypes.string,
};

UserDashboardPartPercentageBar.defaultProps = {
   averagePercentage: false,
   color: false,
};

module.exports = UserDashboardPartPercentageBar;
