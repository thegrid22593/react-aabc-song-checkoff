import firebase from 'firebase';

export function fetchSongs(email, password) {
   return function(dispatch) {
      dispatch({ type: 'FETCHING_SONGS', payload: { loading: true } });
      firebase
         .firestore()
         .collection('songs')
         .get()
         .then(songs => {
            let songArr = [];
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
