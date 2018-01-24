import React from 'react';
import ReactDOM from 'react-dom';


class MusicLibraySongDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section class="song-detail-panel" classname={"" + (this.props.isActive ? 'active' : '')}>
                <div class="crop-height">
                    <img src="" alt="The All-American Boys Chorus"/>
                    <i class="fa fa-close" aria-hidden="true"></i>
                </div>
                <div class="song-details">
                    {/* <h4 class="song-detail-name">{{activeSong.name}}</h4> */}
                    {/* <span class="song-detail-difficulty">Difficulty: {{activeSong.difficulty}}</span> */}
                    <hr/>
                    <ul>
                        {/* <div class="part-name">{{part.name}}</div> */}
                        {/* <li (click)="playSong(part.urls.pianoSolfa, activeSong, 'Piano Solfa')" *ngIf="part.urls.pianoSolfa"><i class="fa fa-play-circle-o" aria-hidden="true"></i>Piano Solfa</li> */}
                        {/* <li (click)="playSong(part.urls.pianoWords, activeSong, 'Piano Words') "*ngIf="part.urls.pianoWords"><i class="fa fa-play-circle-o" aria-hidden="true"></i>Piano Words</li> */}
                        {/* <li (click)="playSong(part.urls.trackWords, activeSong, 'Track Words') "*ngIf="part.urls.trackWords"><i class="fa fa-play-circle-o" aria-hidden="true"></i>Track Words</li> */}
                    </ul>
                </div>
                {/* <button class="checked-off-btn" (click)="songCompleted(activeSong.name)">Checked Off</button> */}
            </section>

            // <section class="audio-player">
            //     <ul class="current-song">
            //         <li><span>Current Song:</span> {{currentSong.name}} | {{currentSongType}}</li>
            //     </ul>
            //     <audio src="" autoplay controls="controls">
            //         Your browser does not support the <code>audio</code> element.
            //     </audio>
            // </section>
        )
    }
}

module.exports = MusicLibraySongDetail;