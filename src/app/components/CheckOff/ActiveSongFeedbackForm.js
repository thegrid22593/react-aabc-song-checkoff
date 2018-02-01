import React from 'react';
import ReactDOM from 'react-dom';

class ActiveSongFeedbackForm extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         feedbackTitle: '',
         feedbackMessage: '',
      };
   }

   handleChange(e) {
      console.log(e);
      let change = {};
      change[e.target.name] = e.target.value;
      console.log(change);
      this.setState(change);
   }

   render() {
      return (
         <form className="active-song-feedback-form">
            <input
               name="feedbackTitle"
               onChange={this.handleChange.bind(this)}
               type="text"
               value={this.state.title}
            />
            <textarea
               name="feedbackMessage"
               onChange={this.handleChange.bind(this)}
               value={this.state.message}
            />
            <div onClick={e => this.props.sendFeedback(e, this.state)}>
               Send Feedback
            </div>
         </form>
      );
   }
}

module.exports = ActiveSongFeedbackForm;
