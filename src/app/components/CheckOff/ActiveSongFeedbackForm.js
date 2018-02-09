import React from 'react';
import ReactDOM from 'react-dom';

class ActiveSongFeedbackForm extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         message: '',
         loading: false,
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
            <label for="title">Title</label>
            <input
               name="title"
               onChange={this.handleChange.bind(this)}
               type="text"
               value={this.state.title}
            />
            <label for="message">Message</label>
            <textarea
               name="message"
               onChange={this.handleChange.bind(this)}
               value={this.state.message}
            />
            <div
               className="send-feedback-button"
               onClick={e => this.props.sendFeedback(e, this.state)}
            >
               Send Feedback
            </div>
            <div
               className={
                  'form-loading ' + (this.state.loading ? 'loading' : '')
               }
            />
         </form>
      );
   }
}

module.exports = ActiveSongFeedbackForm;
