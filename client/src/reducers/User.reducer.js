import { handleActions }    from 'redux-actions';
import * as UserActionTypes from '../constants/User.constants';

const userReducer = handleActions({
  [UserActionTypes.RECEIVE_USERS]: (state, action) =>
    ({
      ...state,
      users: action.payload,
    }),
}, {
  error: '',
  loading: false,
  users: [],
});

export default userReducer;
