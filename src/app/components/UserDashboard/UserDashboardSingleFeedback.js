import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../scss/style.scss';

const truncateText = (str, length = 100, ending = '...') => {
   if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
   }
   return str;
};

const markAsRead = (e, feedback) => {
   e.preventDefault();
   console.log('marked as read', feedback);
};

class UserDashboardSingleFeedback extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: {},
      };
   }

   render() {
      if (!this.props.feedback) {
         return (
            <div className="no-feedback">
               <h2>No Feedback Selected. Please select a message.</h2>
            </div>
         );
      }
      return (
         <div className="single-feedback">
            {this.props.feedback.map(feedback => (
               <div key={feedback.id} className="single-feedback-message">
                  <i className="far fa-envelope" />
                  <h2>{feedback.title}</h2>
                  <button
                     onClick={e => markAsRead(e, feedback)}
                     className="mark-as-read-btn"
                  >
                     <i className="far fa-envelope-open" />Mark as read
                  </button>
                  <p>{truncateText(feedback.message, 150, '...')}</p>
               </div>
            ))}
         </div>
      );
   }
}

UserDashboardSingleFeedback.propTypes = {
   feedback: PropTypes.arrayOf(PropTypes.shape()),
};

UserDashboardSingleFeedback.defaultProps = {
   feedback: false,
};

module.exports = UserDashboardSingleFeedback;
