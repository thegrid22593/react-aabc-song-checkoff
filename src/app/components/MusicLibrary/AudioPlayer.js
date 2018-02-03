import React from 'react';
import ReactDOM from 'react-dom';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSong: null,
            songUrl: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps) {
            this.setState({
                activeSong: nextProps.activeSong,
                songUrl: nextProps.songUrl
            })
        }
    }

    render() {
        if(this.state.songUrl) {
            return (
            <section className="audio-player">
                <ul className="current-song">
                    <li><span>Current Song:</span> {this.state.activeSong.name} |</li>
                </ul>
                <audio src={this.state.songUrl} autoPlay controls="controls">
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </section>
            )
        } else {
            return false;
        }
        
    }
}

module.exports = AudioPlayer;