import React from 'react';
import ReactDOM from 'react-dom';

class SongURL extends React.Component {
   constructor(props) {
      super(props);
      console.log('song url', props);
   }

   render() {

    if(this.props.song.urls.trackWords !== undefined) {
        return (
         <li onClick={(e) => this.props.playSong(e, this.props.song.urls.trackWords)}>
            <i className="fas fa-play-circle" aria-hidden="true" />Track Words
         </li>
        )
    } else if (this.props.song.urls.pianoWords !== undefined) {
        return (
         <li onClick={(e) => this.props.playSong(e, this.props.song.urls.pianoWords)}>    
            <i className="fas fa-play-circle" aria-hidden="true" />Piano Words
         </li>
        )
    } else if (this.props.song.urls.pianoSolfa !== undefined) {
        return (
         <li onClick={(e) => this.props.playSong(e, this.props.song.urls.pianoSplfa)}>
            <i className="fas fa-play-circle" aria-hidden="true" />Piano Solfa
         </li>
        )
    } else {
        return;
    }
   }
}

module.exports = SongURL;
