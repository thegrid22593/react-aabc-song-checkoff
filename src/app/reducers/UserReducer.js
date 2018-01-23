import firebase from 'firebase';


export default function reducer(state={
    userID: null,
    fetching: false,
    fetched: false,
    error: null,
    userAuth: {},
    user: {}
}, action) {

    switch(action.type) {
        case 'USER_SIGNED_IN_SUCCESS': {
            state = {...state, userAuth: action.payload, fetched: true}
            return state;
        }
        case 'USER_SIGNED_IN_ERROR': {
            return state;
        }

        case 'USER_DATA_RECEIVED': {
            state = {...state, user: action.payload}
            return state;
        }

        case 'USER_DATA_ERROR': {
            state = {...state, error: action.payload}
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
        
        default: {
            return state;
        }
    }
}