import User from '../models/User.model';

export async function postUser(user) {
  user.roleId = 3;
  let newUser;
  try {
    newUser = await User.query()
      .insertWithRelated(user);
  } catch (err) {
    return Promise.reject(err);
  }
  return Promise.resolve(newUser);
}

export async function getUsers() {
  let users;
  try {
    users = await User.query();
  } catch (err) {
    return Promise.reject(err);
  }
  if (!users) return Promise.reject('no users');
  return Promise.resolve(users);
}
