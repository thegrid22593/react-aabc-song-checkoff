import React from 'react';
import ReactDOM from 'react-dom';

class MusicLibrarySearch extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <section className="search-bar">
            {/* <h3>Music Library</h3> */}
            <form className="search-bar-input">
               <input
                  id="search-box"
                  onKeyUp={this.props.searchLibrary}
                  type="text"
               />
            </form>
            <div className="filter-bar">
               <div className="results-found">
                  {this.props.songs.length} Results found
               </div>
               <select onChange={this.props.handleSelectChange}>
                  <option disabled selected>
                     Filter
                  </option>
                  <option value="difficulty-descending">
                     Difficulty Descending
                  </option>
                  <option value="difficulty-ascending">
                     Difficulty Ascending
                  </option>
               </select>
            </div>
         </section>
      );
   }
}

export default MusicLibrarySearch;
