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
         state = { ...state, loading: action.payload };
         return state;
      }

      case 'FETCHING_SONGS_SUCCESS': {
         state = { ...state, songs: action.payload, loading: false };
         return state;
      }

      case 'FETCHING_SONGS_ERROR': {
         state = { ...state, error: action.payload, loading: false };
         return state;
      }

      default: {
         return state;
      }
   }
}
