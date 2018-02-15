import { combineReducers } from 'redux';
import user from './user_reducer';
import member from './member_reducer';

export default combineReducers({
   user,
   member
});
