import firebase from 'firebase';

export default function fetchSongs() {
   return (dispatch) => {
      dispatch({ type: 'FETCHING_SONGS', payload: { loading: true } });
      firebase
         .firestore()
         .collection('songs')
         .get()
         .then(songs => {
            const songArr = [];
            songs.forEach(song => {
               songArr.push(song.data());
            });

            dispatch({
               type: 'FETCHING_SONGS_SUCCESS',
               payload: songArr,
            });
         })
         .catch(error => {
            dispatch({ type: 'FETCHING_SONGS_ERROR', payload: error });
         });
   };
}
