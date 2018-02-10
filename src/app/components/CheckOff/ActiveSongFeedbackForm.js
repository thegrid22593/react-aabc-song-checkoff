import React from 'react';
import PropTypes from 'prop-types';

class ActiveSongFeedbackForm extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         message: '',
         loading: false,
      };

      this.handleChange.bind(this);
   }

   handleChange(e) {
      console.log(e);
      const change = {};
      change[e.target.name] = e.target.value;
      console.log(change);
      this.setState(change);
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
               onClick={e => this.props.sendFeedback(e, this.state)}
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
