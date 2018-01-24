import ReactDOM from 'react-dom';
import React from 'react';
import fire from '../../fire';
require('../scss/style.scss');
import MusicLibrarySongDetail from './MusicLibrarySongDetail';

class MusicLibrary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songDetailIsActive: false
        }
    }

    openDetail(e) {
        this.setState({songDetailIsActive: !songDetailIsActive})
        e.preventDefault();
        console.log('open detail', e);
    } 

    render() {
        console.log('songs', this.props.songs);
        return (
            <div className="music-library">
                {/* <section className="search-bar"> */}
                    {/* <h3>Music Library</h3> */}
                    {/* <form className="search-bar-input">
                        <input #searchBox id="search-box" (keyup)="search(searchBox.value)" type="text">
                    </form> */}
                {/* </section> */}
                {/* <div className="col-lg-2">
                    <section className="song-filter">
                        <h4>Filter</h4>
                        <hr className="filter-hr"/>

                        <span className="filter-section-title">Difficulty</span>
                        <ul className="filter-option-list">
                            <li>Easy</li>
                            <li>Medium</li>
                            <li>Hard</li>
                        </ul>

                        <span className="filter-section-title">Genre</span>
                        <ul className="filter-option-list">
                            <li>Americana</li>
                            <li>Sacred / Religious</li>
                            <li>Jazz</li>
                            <li>Pop</li>
                        </ul>

                        <span className="filter-option-title">Length</span>
                        <ul className="filter-option-list">
                            <li>Short</li>
                            <li>Medium</li>
                            <li>Long</li>
                        </ul>
                    </section>
                </div> */}
                <div className="col-lg-10">
                    <section className="songs">
                        {/* <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                            <div className="bounce4"></div>
                        </div> */}
                        <div className="songs-list">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Difficulty</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.songs.map((song, index) => {
                                        return (
                                            <tr key={index} onClick={this.openDetail.bind(this)}>
                                                <td>{song.name}</td>
                                                <td>{song.difficulty}</td>
                                                <td>{song.time}</td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        {/* <td>{song.name}</td> */}
                                        {/* <td>{song.difficulty}</td> */}
                                        {/* <td>{song.time}</td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
                <MusicLibrarySongDetail isActive={this.state.songDetailIsActive}/>
            </div>
        )
    }
}

module.exports = MusicLibrary;