import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
// import { v4 as uuidv4 } from 'uuid';
// import {setToken} from '../middlewares/auth.middleware'

export const registerUser = async (req, res, next) => {
  try {
    const data = await UserService.registerUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User Registered successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const forgetPassword = async (req, res, next) => {
  try {
    const data = await UserService.forgetPassword(req,res);
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
    const data = await UserService.resetPassword(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Password Reset successfully'
    });
  } catch (error) {
    next(error);
  }
};

// login user
export const loginUser = async (req, res, next) => {
  try {
    const data = await UserService.loginUser(req.body,res);
    if(data!= null){
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'User Logged In successfully'
      });
    }else{
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.NO_CONTENT,
        data: data,
        message: 'User Not Found, Check your email or password again'
      });
    }
    
  } catch (error) {
    next(error);
  }
};
