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
         return { ...state, loading: true };
      }

      case 'USER_SIGNED_UP_SUCCESS': {
         return { ...state, userAuth: action.payload, loading: false };
      }

      case 'USER_SIGNED_UP_ERROR': {
         return { ...state, error: action.payload, loading: false };
      }

      case 'USER_SIGNED_IN_PENDING': {
         return { ...state, loading: action.payload.loading };
      }

      case 'USER_SIGNED_IN_SUCCESS': {
         return { ...state, userAuth: action.payload, loading: false };
      }
      case 'USER_SIGNED_IN_ERROR': {
         return { ...state, error: action.payload, loading: false };
      }

      case 'USER_DATA_RECEIVED': {
         return { ...state, user: action.payload };
      }

      case 'USER_DATA_ERROR': {
         return { ...state, error: action.payload };
      }

      case 'FETCHING_USER_SUCCESS': {
         return { ...state, user: action.payload };
      }

      case 'UPDATE_USER_PENDING': {
         return { ...state, loading: action.payload };
      }

      case 'UPDATE_USER_SUCCESS': {
         return { ...state, error: action.payload };
      }

      case 'UPDATE_USER_ERROR': {
         break;
      }

      case 'CREATE_USER_SUCCESS': {
         return { ...state, user: action.payload };
      }

      case 'FETCH_PART_MEMBERS_PENDING': {
         return { ...state, fetching: action.payload };
      }

      case 'FETCH_PART_MEMBERS_SUCCESS': {
         return { ...state, partMembers: action.payload, fetching: false };
      }

      case 'USER_SIGN_OUT_PENDING': {
         return { ...state, loading: action.payload };
      }

      case 'USER_SIGN_OUT_SUCCESSFULL': {
         return { ...state, userAuth: null, loading: false };
      }

      case 'USER_SIGN_OUT_ERROR': {
         return { ...state, error: action.payload };
      }

      default: {
         return state;
      }
   }

   return state;
}
