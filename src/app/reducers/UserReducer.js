export default function reducer(state={
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch(action.type) {
        case 'UPDATE_USER': {
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