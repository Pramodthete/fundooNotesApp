import HttpStatus from 'http-status-codes';
import * as adminService from '../services/admin.service';
// import { v4 as uuidv4 } from 'uuid';
// import {setToken} from '../middlewares/auth.middleware'

export const registeradmin = async (req, res, next) => {
  try {
    const data = await adminService.registeradmin(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'admin Registered successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const forgetPassword = async (req, res, next) => {
  try {
    const data = await adminService.forgetPassword(req,res);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Password Forget'
    });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const data = await adminService.resetPassword(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Password Reset successfully'
    });
  } catch (error) {
    next(error);
  }
};

// login admin
export const loginadmin = async (req, res, next) => {
  try {
    const data = await adminService.loginadmin(req.body,res);
    if(data!= null){
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: "admin Logged In successfullÿ"
      });
    }else{
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.NO_CONTENT,
        data: data,
        message: "admin Not Found, Check your email or password again"
      });
    }
    
  } catch (error) {
    next(error);
  }
};
