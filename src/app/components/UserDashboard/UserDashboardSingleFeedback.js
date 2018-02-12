import ReactDOM from "react-dom";
import React from "react";
import { Switch, Route, Router } from "react-router-dom";
require("../../scss/style.scss");

class UserDashboardSingleFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  truncateText(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }

  markAsRead(feedback) {
    console.log(feedback);
  }

  render() {
    if (!this.props.feedback) {
      return (
        <div className="no-feedback">
          <h2>No Feedback Selected. Please select a message.</h2>
        </div>
      );
    } else {
      return (
        <div className="single-feedback">
          {this.props.feedback.map((feedback, index) => {
            console.log("single", feedback);
            return (
              <div className="single-feedback-message">
                <i className="far fa-envelope" />
                <h2 key={index}>{feedback.title}</h2>
                <button
                  onClick={e => this.markAsRead(feedback)}
                  className="mark-as-read-btn"
                >
                  <i className="far fa-envelope-open" />Mark as read
                </button>
                <p>{this.truncateText(feedback.message, 150, "...")}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

module.exports = UserDashboardSingleFeedback;
