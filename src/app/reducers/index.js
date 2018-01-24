import { combineReducers } from 'redux';

import songs from './SongReducer';
import user from './UserReducer';

export default combineReducers({
    songs,
    user,
});