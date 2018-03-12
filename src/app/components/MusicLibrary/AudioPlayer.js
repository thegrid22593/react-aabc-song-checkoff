import React from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         activeSong: null,
         songUrl: null,
      };

   }

   componentWillReceiveProps(nextProps) {
      if (nextProps) {
         this.setState({
            activeSong: nextProps.activeSong,
            songUrl: nextProps.songUrl,
         });
      }
   }

   render() {
      if (this.state.songUrl) {
         return (
            <section className="audio-player">
               <ul className="current-song">
                  <li>
                     <span>Current Song:</span> {this.state.activeSong.name} |
                  </li>
               </ul>
               <audio src={this.state.songUrl} autoPlay controls="controls">
                  <track kind="captions" />
                  Your browser does not support the <code>audio</code> element.
               </audio>
            </section>
         );
      }
      return false;
   }
}

AudioPlayer.propTypes = {
   songUrl: PropTypes.string,
   activeSong: PropTypes.shape().isRequired,
};

AudioPlayer.defaultProps = {
   songUrl: false,
};

module.exports = AudioPlayer;
