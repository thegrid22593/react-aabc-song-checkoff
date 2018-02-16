import React from 'react';
import PropTypes from 'prop-types';

class ActiveCheckOffMember extends React.Component {
   constructor(props) {
      super(props);

      console.log('props', props);

      this.state = {
         activeMember: this.props.activeMember,
         activeSongIndex: 0,
      };
   }

   componentWillReceiveProps(nextProps) {
      if (typeof nextProps !== 'undefined') {
         this.setState({
            activeMember: nextProps.activeMember,
         });
      }
   }

   selectCheckOffSong(e, song) {
      this.setState({ activeSongIndex: song.id });
      this.props.selectCheckOffSong(e, song, this.state.activeMember);
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
                  {this.state.activeMember.songs.map(song => {
                     if (song.completed) {
                        return (
                           <li key={song.id}>
                              <i
                                 className="fas fa-check-square completed"
                                 aria-hidden="true"
                              />
                              {song.name}
                           </li>
                        );
                     }
                     return (
                        <li
                           key={song.id}
                           className={`${
                              this.state.activeSongIndex === song.id
                                 ? 'active'
                                 : ''
                           }`}
                        >
                           <a
                              href=""
                              onClick={e => this.selectCheckOffSong(e, song)}
                           >
                              <i
                                 className="far fa-check-square"
                                 aria-hidden="true"
                              />
                              {song.name}
                           </a>
                        </li>
                     );
                  })}
               </ul>
            </div>
         );
      }
      return (
         <div className="active-member-container">
            <h1>Select a member</h1>
         </div>
      );
   }
}

ActiveCheckOffMember.propTypes = {
   activeMember: PropTypes.shape(),
   selectCheckOffSong: PropTypes.func.isRequired,
};

ActiveCheckOffMember.defaultProps = {
   activeMember: false,
};

module.exports = ActiveCheckOffMember;
