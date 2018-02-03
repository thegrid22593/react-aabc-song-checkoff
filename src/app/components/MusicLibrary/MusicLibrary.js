import ReactDOM from 'react-dom';
import React from 'react';
import MusicLibrarySongDetail from './MusicLibrarySongDetail';
import MusicLibrarySearch from './MusicLibrarySearch';
import AudioPlayer from './AudioPlayer';

class MusicLibrary extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         songDetailIsActive: false,
         activeSong: {
            parts: [],
         },
         songs: this.props.songs,
         activeSongUrl: null,
      };
   }

   componentWillReceiveProps(nextProps) {
      this.setState({ songs: nextProps.songs });
   }

   toggleSongDetail(e, index) {
      e.preventDefault();
      console.log('open detail', e);
      console.log('index', index);
      console.log('this', this);
      if (index !== null) {
         let activeSong = {
            index: index,
            ...this.props.songs[index],
         };
         this.setState({
            activeSong: activeSong,
            songDetailIsActive: true,
         });
      } else {
         this.setState({
            songDetailIsActive: false,
         });
      }
   }

   completedSong() {
      console.log('fired');
      let index = this.state.activeSong.index;
      this.props.songs[index].completed = true;
      this.props.updateUserSongs(this.props.songs[index]);
   }

   searchLibrary(e) {
      console.log('working', e.target.value);
      let searchValue = e.target.value.toLowerCase();
      let searchedSongs = this.props.songs.filter(song => {
         return song.name.toLowerCase().includes(searchValue);
      });
      this.setState({ songs: searchedSongs });
   }

   handleSelectChange(e) {
      console.log('working', e.target.value);
      let sortValue = e.target.value;
      let songsToSort = this.props.songs;
      let sortedSongs;
      if (sortValue === 'difficulty-ascending') {
         sortedSongs = songsToSort.sort((a, b) => {
            let x = a.difficulty;
            let y = b.difficulty;
            return x < y ? -1 : x > y ? 1 : 0;
         });
      } else if (sortValue === 'difficulty-descending') {
         sortedSongs = songsToSort.sort((a, b) => {
            let x = a.difficulty;
            let y = b.difficulty;
            return x > y ? -1 : x < y ? 1 : 0;
         });
      } else if (sortValue === 'time-ascending') {
         sortedSongs = songsToSort.sort((a, b) => {
            let x = parseFloat(a.time.replace(':', ''));
            let y = parseFloat(b.time.replace(':', ''));
            return x > y ? -1 : x < y ? 1 : 0;
         });
      } else if (sortValue === 'time-descending') {
         sortedSongs = songsToSort.sort((a, b) => {
            let x = parseFloat(a.time.replace(':', ''));
            let y = parseFloat(b.time.replace(':', ''));
            return x < y ? -1 : x > y ? 1 : 0;
         });
         // We need to get a new set of songs with this
      } else if (sortValue === 'completed') {
         sortedSongs = songsToSort.filter(song => {
            return song.completed === true;
         });
      } else if (sortValue === 'not-completed') {
         sortedSongs = songsToSort.filter(song => {
            return song.completed === false;
         });
      }
      this.setState({ songs: sortedSongs });
   }

   playSong(e, songUrl) {
       e.preventDefault();
       console.log(e);
       console.log(songUrl);
       this.setState({
           activeSongUrl: songUrl
       })
   }

   render() {
      return (
         <div className="music-library">
            <MusicLibrarySearch
               searchLibrary={e => this.searchLibrary(e)}
               handleSelectChange={e => this.handleSelectChange(e)}
               songs={this.state.songs}
            />
            {/* <div className="col-lg-2">
               <section className="song-filter">
                  <h4>Filter</h4>
                  <hr className="filter-hr" />

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

                     {this.state.songs.map((song, index) => {
                        return (
                           <tbody className={song.completed ? 'completed' : ''}>
                              <tr
                                 key={index}
                                 onClick={e => {
                                    this.toggleSongDetail(e, index);
                                 }}
                              >
                                 <td>{song.name}</td>
                                 <td>{song.difficulty}</td>
                                 <td>{song.time}</td>
                              </tr>
                           </tbody>
                        );
                     })}
                  </table>
               </div>
            </section>
            <MusicLibrarySongDetail
               playSong={this.playSong.bind(this)}
               isActive={this.state.songDetailIsActive}
               toggleSongDetail={this.toggleSongDetail.bind(this)}
               activeSong={this.state.activeSong}
               completedSong={this.completedSong.bind(this)}
            />

            <AudioPlayer songUrl={this.state.activeSongUrl} activeSong={this.state.activeSong}/>
         </div>
      );
   }
}

module.exports = MusicLibrary;
