import React from 'react';
import ReactDOM from 'react-dom';

class SongURL extends React.Component {
   constructor(props) {
      super(props);
      console.log('song url', props);
   }

   render() {
      return (
         <li>
            <i className="fa fa-play-circle-o" aria-hidden="true" />Song
         </li>
      );
   }
}

module.exports = SongURL;
