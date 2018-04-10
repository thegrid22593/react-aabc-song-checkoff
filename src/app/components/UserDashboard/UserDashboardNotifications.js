import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
   user: state.user.user,
});

class UserDashboardNotifications extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: this.props.user,
         notifications: [],
      };

      console.log(this.props.user);
   }

   componentWillMount() {
      const userFeedback = this.props.user.songs.filter(song => {
         if (typeof song.notes !== 'undefined' && song.notes.length > 0) {
            const notifications = song.notes.map(note => {
               console.log(note);
               return note;
            });
            return notifications;
         }
      });

      console.log('userfeedback', userFeedback);

      this.setState({
         notifications: userFeedback,
      });
   }

   render() {
      return (
         <section className="notification-messages-container">
            <div className="notification-messages">
               {this.state.notifications.map(notification => {
                  return <div className="messages">This is a message</div>;
               })}
            </div>
         </section>
      );
   }
}

UserDashboardNotifications.propTypes = {
   user: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(UserDashboardNotifications);
