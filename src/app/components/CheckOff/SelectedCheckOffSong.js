import React from 'react';
import ReactDom from 'react-dom';
import ActiveSongFeedbackForm from './ActiveSongFeedbackForm';

class SelectedCheckOffSong extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         activeSong: this.props.song,
         feedback: {
            title: '',
            message: '',
         },
      };
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps !== undefined) {
         this.setState({
            activeSong: nextProps.activeSong,
         });
      }
   }

   render() {
      if (this.props.activeSong) {
         return (
            <div className="active-song">
               <div className="active-song-header">
                  <h3 className="active-song-title">
                     {this.props.activeSong.name}
                  </h3>
               </div>
               <div className="active-song-content">
                  <ActiveSongFeedbackForm
                     sendFeedback={(e, feedback) =>
                        this.props.sendFeedback(
                           e,
                           feedback,
                           this.props.activeSong
                        )
                     }
                  />
               </div>
            </div>
         );
      } else {
         return <h1>Select a song</h1>;
      }
   }
}

module.exports = SelectedCheckOffSong;
