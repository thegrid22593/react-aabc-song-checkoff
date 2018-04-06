import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActiveSongFeedbackForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         message: '',
         loading: false,
      };

      this.handleChange = this.handleChange.bind(this);
      this.sendFeedback = this.sendFeedback.bind(this);
   }

   handleChange(e) {
      console.log(e);
      const change = {};
      change[e.target.name] = e.target.value;
      console.log(change);
      this.setState(change);
   }

   sendFeedback(e, feedback) {
      e.preventDefault();
      if (feedback.title !== '' && feedback.message !== '') {
         try {
            this.setState({
               loading: true,
            });
            this.props.sendFeedback(e, feedback);
            this.setState({
               title: '',
               message: '',
               loading: false,
            });
         } catch (error) {
            console.log('error', error);
         }
      } else {
         console.log('fill out the form');
      }
   }

   render() {
      return (
         <form className="active-song-feedback-form">
            <label htmlFor="title">Title</label>
            <input
               name="title"
               onChange={this.handleChange}
               type="text"
               value={this.state.title}
            />
            <label htmlFor="message">Message</label>
            <textarea
               name="message"
               onChange={this.handleChange}
               value={this.state.message}
            />
            <button
               className="send-feedback-button"
               onClick={e => this.sendFeedback(e, this.state)}
            >
               Send Feedback
            </button>
            <div
               className={`form-loading ${this.state.loading ? 'loading' : ''}`}
            />
         </form>
      );
   }
}

ActiveSongFeedbackForm.propTypes = {
   sendFeedback: PropTypes.func.isRequired,
};

module.exports = ActiveSongFeedbackForm;
