import ReactDOM from 'react-dom';
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
require('../../scss/style.scss');

class UserDashboardSingleFeedback extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         user: {},
      };
   }

   render() {
      return (
         <div className="single-feedback col-lg-6 columns">
            {this.props.feedback.map((feedback, index) => {
               console.log('single', feedback);
               return <h2 key={index}>{feedback.title}</h2>;
            })}
         </div>
      );
   }
}

module.exports = UserDashboardSingleFeedback;
