import { createAction }       from 'redux-actions';
import axios                  from '../axios';
import * as UserActionTypes   from '../constants/User.constants';

const requestData  = createAction(UserActionTypes.REQUEST_DATA);
const receiveUsers = createAction(UserActionTypes.RECEIVE_USERS);

export function fetchUsers() {
  return (dispatch) => {
    dispatch(requestData());
    return axios.get('/api/users')
      .then((response) => dispatch(receiveUsers(response.data)))
      .catch((err) => console.log(err));
  };
}
