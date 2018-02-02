import firebase from 'firebase';

export default function reducer(
   state = {
      error: null,
      userAuth: {},
      user: {
         partMembers: [],
      },
   },
   action
) {
   switch (action.type) {
      case 'USER_SIGNED_UP_PENDING': {
         state = { ...state, loading: true };
         return state;
      }

      case 'USER_SIGNED_UP_SUCCESS': {
         state = { ...state, userAuth: action.payload, loading: false };
      }

      case 'USER_SIGNED_UP_ERROR': {
         state = { ...state, error: action.payload, loading: false };
         return state;
      }

      case 'USER_SIGNED_IN_PENDING': {
         state = { ...state, loading: action.payload };
         console.log('STATE', state);
      }

      case 'USER_SIGNED_IN_SUCCESS': {
         state = { ...state, userAuth: action.payload, loading: false };
         return state;
      }
      case 'USER_SIGNED_IN_ERROR': {
         state = { ...state, error: action.payload, loading: false };
         return state;
      }

      case 'USER_DATA_RECEIVED': {
         state = { ...state, user: action.payload };
         return state;
      }

      case 'USER_DATA_ERROR': {
         state = { ...state, error: action.payload };
         return state;
      }

      case 'FETCHING_USER_SUCCESS': {
         state = { ...state, user: action.payload };
         return state;
      }

      case 'UPDATE_USER_PENDING': {
         state = { ...state, loading: action.payload };
         return state;
      }

      case 'UPDATE_USER_SUCCESS': {
         state = { ...state, error: action.payload };
         return state;
      }

      case 'UPDATE_USER_ERROR': {
      }

      case 'CREATE_USER_SUCCESS': {
         state = { ...state, user: action.payload };
         return state;
      }

      case 'FETCH_PART_MEMBERS_PENDING': {
         state = { ...state, fetching: action.payload };
         return state;
      }

      case 'FETCH_PART_MEMBERS_SUCCESS': {
         state = { ...state, partMembers: action.payload, fetching: false };
         return state;
      }

      case 'UPDATE_USER_SONGS': {
      }

      case 'UPDATE_USER_COMPLETION': {
      }

      case 'UPDATE_USER_NAME': {
      }

      case 'UPDATE_USER_MESSAGES': {
      }

      case 'USER_SIGN_OUT_PENDING': {
         state = { ...state, loading: action.payload };
         return state;
      }

      case 'USER_SIGN_OUT_SUCCESSFULL': {
         state = { ...state, userAuth: null, loading: false };
         return state;
      }

      case 'USER_SIGN_OUT_ERROR': {
         state = { ...state, error: action.payload };
         return state;
      }

      default: {
         return state;
      }
   }
}
