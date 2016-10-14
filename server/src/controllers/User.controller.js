import * as userService from '../db/services/User.service';

export function postUser(req, res) {
  Promise.resolve()
    .then(() => userService.postUser(req.body))
    .then((user) => res.status(200).json(user))
}

export function getUsers(req, res) {
  Promise.resolve()
    .then(() => userService.getUsers())
    .then((users) => res.status(200).json(users))
}
