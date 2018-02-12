import React from "react";
import PropTypes from "prop-types";
import SongURL from "./SongURL";

class MusicLibraySongDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSong: props.activeSong
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeSong: nextProps.activeSong
    });

    console.log(this.state);
  }

  //    songCompleted(songName) {
  //       console.log('completed', songName);
  //    }

  //    playSong(url) {}

  //    renderSongUrlList(part, index) {
  //     console.log('part', part);
  //     let urls = Object.values(part.urls);
  //     let keys = Object.keys(part.urls);
  //     console.log('keys', keys);
  //     console.log('values', urls);
  //  }

  render() {
    return (
      <section
        className={`song-detail-panel ${this.props.isActive ? "active" : ""}`}
      >
        <div className="crop-height">
          <img src="" alt="The All-American Boys Chorus" />
          <i
            onClick={e => {
              this.props.toggleSongDetail(e, null);
            }}
            className="far fa-times-circle"
            aria-hidden="true"
          />
        </div>
        <div className="song-details">
          <h4 className="song-detail-name">{this.state.activeSong.name}</h4>
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
                    <SongURL
                      playSong={(e, songUrl) => this.props.playSong(e, songUrl)}
                      song={part}
                      index={index}
                    />
                  </ul>
                </div>
              );
            })}
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
    );
  }
}

MusicLibraySongDetail.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleSongDetail: PropTypes.func.isRequired,
  activeSong: PropTypes.shape().isRequired,
  completedSong: PropTypes.func.isRequired,
  playSong: PropTypes.func.isRequired
};

module.exports = MusicLibraySongDetail;
