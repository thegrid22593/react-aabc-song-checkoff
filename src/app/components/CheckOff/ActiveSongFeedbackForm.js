import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActiveSongFeedbackForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         message: '',
         errors: [],
         loading: false,
      };

      this.handleChange = this.handleChange.bind(this);
      this.sendFeedback = this.sendFeedback.bind(this);
   }

   handleChange(e) {
      const change = {};
      change[e.target.name] = e.target.value;
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
            const { errors } = this.state;
            errors.push(error);
            this.setState({ errors });
            // console.log('error', error);
         }
      } else {
         const errors = ['Please fill out the required fields'];
         this.setState({ errors });
      }
   }

   render() {
      return (
         <form className="active-song-feedback-form">
            <div className="error">{this.state.errors}</div>
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
