import { combineReducers } from 'redux';

import songs from './SongsReducer';
import user from './UserReducer';

export default combineReducers({
   songs,
   user,
});
