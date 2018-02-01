import React from 'react';
import ReactDOM from 'react-dom';

class ActiveCheckOffMember extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         activeMember: this.props.activeMember,
      };
   }

   componentWillReceiveProps(newProps) {
      this.setState({
         activeMember: newProps.activeMember,
      });
   }

   render() {
      if (this.state.activeMember) {
         return (
            <div className="active-member-container">
               <h1>{this.props.activeMember.firstName}</h1>
            </div>
         );
      } else {
         return (
            <div className="active-member-container">
               <h1>Select a member</h1>
            </div>
         );
      }
   }
}

module.exports = ActiveCheckOffMember;
