import React from 'react';
import PropTypes from 'prop-types';

class SongURL extends React.Component {
   constructor(props) {
      super(props);
      console.log('song url', props);
   }

   render() {

    if(this.props.song.urls.trackWords !== undefined) {
        return (
         <li>
            <a href="" onClick={(e) => this.props.playSong(e, this.props.song.urls.trackWords)}>
                <i className="fas fa-play-circle" aria-hidden="true" />Track Words
            </a>
         </li>
        )
    } else if (this.props.song.urls.pianoWords !== undefined) {
        return (
         <li>
             <a href="" onClick={(e) => this.props.playSong(e, this.props.song.urls.pianoWords)}>   
                <i className="fas fa-play-circle" aria-hidden="true" />Piano Words
            </a>
         </li>
        )
    } else if (this.props.song.urls.pianoSolfa !== undefined) {
        return (
         <li>
            <a href="" onClick={(e) => this.props.playSong(e, this.props.song.urls.pianoSolfa)}>
                <i className="fas fa-play-circle" aria-hidden="true" />Piano Solfa
            </a>
         </li>
        )
    }
    return false;
   }
}

SongURL.propTypes = {
    playSong: PropTypes.func.isRequired,
    song: PropTypes.shape({
        urls: PropTypes.shape({
            trackWords: PropTypes.string,
            pianoWords: PropTypes.string,
            pianoSolfa: PropTypes.string,
        })
    }).isRequired
}

module.exports = SongURL;
