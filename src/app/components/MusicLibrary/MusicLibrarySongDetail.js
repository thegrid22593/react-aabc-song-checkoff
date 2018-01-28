import React from 'react';
import ReactDOM from 'react-dom';
import SongURL from './SongURL';

class MusicLibraySongDetail extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         activeSong: props.activeSong,
      };
   }

   componentWillReceiveProps(nextProps) {
      this.setState({
         activeSong: nextProps.activeSong,
      });

      console.log(this.state);
   }

   renderSongUrlList(part, index) {
      console.log('part', part);
      let urls = Object.values(part.urls);
      let keys = Object.keys(part.urls);
      console.log('keys', keys);
      console.log('values', urls);
   }

//    songCompleted(songName) {
//       console.log('completed', songName);
//    }

   playSong(url) {}

   render() {
      return (
         <section
            className={
               'song-detail-panel ' + (this.props.isActive ? 'active' : '')
            }
         >
            <div className="crop-height">
               <img src="" alt="The All-American Boys Chorus" />
               <i
                  onClick={e => {
                     this.props.toggleSongDetail(e, null);
                  }}
                  className="fa fa-close"
                  aria-hidden="true"
               />
            </div>
            <div className="song-details">
               <h4 className="song-detail-name">
                  {this.state.activeSong.name}
               </h4>
               <span className="song-detail-difficulty">
                  Difficulty: {this.state.activeSong.difficulty}
               </span>
               <hr />
               <ul>
                  {this.state.activeSong.parts.map((part, index) => {
                     return (
                        <div key={index} className="song-parts">
                           <div className="part-name">{part.name}</div>
                           <ul>
                              <SongURL song={part} index={index} />
                           </ul>
                        </div>
                     );
                  })}
                  {/* <li (click)="playSong(part.urls.pianoSolfa, activeSong, 'Piano Solfa')" *ngIf="part.urls.pianoSolfa"><i className="fa fa-play-circle-o" aria-hidden="true"></i>Piano Solfa</li>
                  <li (click)="playSong(part.urls.pianoWords, activeSong, 'Piano Words') "*ngIf="part.urls.pianoWords"><i className="fa fa-play-circle-o" aria-hidden="true"></i>Piano Words</li>
                  <li (click)="playSong(part.urls.trackWords, activeSong, 'Track Words') "*ngIf="part.urls.trackWords"><i className="fa fa-play-circle-o" aria-hidden="true"></i>Track Words</li> */}
               </ul>
            </div>
            <button
               className="checked-off-btn"
               onClick={() => {
                  this.props.completedSong();
               }}
            >
               Checked Off
            </button>
         </section>

         // <section className="audio-player">
         //     <ul className="current-song">
         //         <li><span>Current Song:</span> {{currentSong.name}} | {{currentSongType}}</li>
         //     </ul>
         //     <audio src="" autoplay controls="controls">
         //         Your browser does not support the <code>audio</code> element.
         //     </audio>
         // </section>
      );
   }
}

// MusicLibraySongDetail.propTypes = {
//     toggleSongDetail: React.PropTypes.object.isRequired,
// }

module.exports = MusicLibraySongDetail;
