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
               <h1>
                  {this.state.activeMember.firstName}{' '}
                  {this.state.activeMember.lastName}
               </h1>
               <ul className="active-member-songs">
                  {this.state.activeMember.songs.map((song, index) => {
                     if (song.completed) {
                        return (
                           <li key={index}>
                              <i
                                 className="fas fa-check-square completed"
                                 aria-hidden="true"
                              />
                              {song.name}
                           </li>
                        );
                     } else {
                        return (
                           <li key={index}>
                              <i
                                 className="far fa-check-square"
                                 aria-hidden="true"
                              />
                              {song.name}
                           </li>
                        );
                     }
                  })}
               </ul>
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
