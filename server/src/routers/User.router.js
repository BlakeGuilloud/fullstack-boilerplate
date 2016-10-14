import express             from 'express';
import * as userController from '../controllers/User.controller';

const router = express.Router();

router.get('/', userController.getUsers);
router.post('/', userController.postUser);

export default router;
