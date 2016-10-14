import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import userReducer         from './User.reducer';


const rootReducer = combineReducers({
  users: userReducer,
  routing:  routerReducer,
});

export default rootReducer;
