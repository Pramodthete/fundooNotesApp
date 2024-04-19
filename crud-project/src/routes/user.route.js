import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new user
router.post('',newUserValidator, userController.registerUser);//validater used before here

// route to forgot password
router.post('/forgotpass', userController.forgetPassword);

// route to reset password
router.post('/resetpass',userAuth, userController.resetPassword);

//route to login user
router.post('/login', userController.loginUser);

export default router;
