import ReactDOM from 'react-dom';
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
require('../../scss/style.scss');

class UserDashboardSingleFeedback extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         user: {},
         activeFeedback: [],
      };

      console.log('feedback', props);
   }

   componentWillMount() {}

   showFeedback(song) {
      let notes = song.notes;
      this.setState({
         activeFeedback: notes,
      });
   }

   render() {
      return (
         <div className="single-feedback">
            {this.props.feedback.map((feedback, index) => {
               return <h2 key={index}>{feedback.title}</h2>;
            })}
         </div>
      );
   }
}

module.exports = UserDashboardSingleFeedback;
