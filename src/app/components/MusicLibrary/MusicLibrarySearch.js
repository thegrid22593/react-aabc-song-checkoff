import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicLibrarySearch extends Component {
   constructor(props) {
      super(props);

      this.state = {};
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
                  placeholder="Search Songs..."
               />
            </form>
            <div className="filter-bar">
               <div className="results-found">
                  {this.props.songs.length} Results found
               </div>
               <select onChange={this.props.handleSelectChange}>
                  <option disabled defaultValue="selected">
                     Filter
                  </option>
                  <option value="difficulty-descending">
                     Difficulty Descending
                  </option>
                  <option value="difficulty-ascending">
                     Difficulty Ascending
                  </option>
                  <option value="time-descending">Time Descending</option>
                  <option value="time-ascending">Time Ascending</option>
                  <option value="completed">Completed</option>
                  <option value="not-completed">Not Completed</option>
               </select>
            </div>
         </section>
      );
   }
}

MusicLibrarySearch.propTypes = {
   searchLibrary: PropTypes.func.isRequired,
   handleSelectChange: PropTypes.func.isRequired,
   songs: PropTypes.arrayOf(PropTypes.shape()),
};

MusicLibrarySearch.defaultProps = {
   songs: false,
};

module.exports = MusicLibrarySearch;
