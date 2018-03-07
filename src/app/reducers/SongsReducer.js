export default function reducer(
   state = {
      songs: [],
      loading: false,
      error: null,
   },
   action
) {
   switch (action.type) {
      case 'FETCHING_SONGS_PENDING': {
         return { ...state, loading: action.payload };
      }

      case 'FETCHING_SONGS_SUCCESS': {
         return { ...state, songs: action.payload, loading: false };
      }

      case 'FETCHING_SONGS_ERROR': {
         return { ...state, error: action.payload, loading: false };
      }

      default: {
         return state;
      }
   }
}
