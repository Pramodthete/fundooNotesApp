import express from 'express';
import * as adminController from '../controllers/admin.controller';
import { newadminValidator } from '../validators/admin.validator';
import { adminAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new admin
router.post('/',newadminValidator, adminController.registeradmin); //validater used before here

// route to forgot password
router.post('/forgetpass', adminController.forgetPassword);

// route to reset password
router.post('/resetpass',adminAuth, adminController.resetPassword);

//route to login admin
router.post('/login', adminController.loginadmin);

export default router;
