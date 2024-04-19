import User from '../models/user.model';
// import { v4 as uuidv4 } from 'uuid';
import {setToken,userAuth} from '../middlewares/auth.middleware'
// import jwt from 'jsonwebtoken';
require('dotenv').config();
const secret = process.env.SECRET_KEY;

//Register new user
export const registerUser = async (body) => {
  const data = await User.create(body);
  return data;
};

// Forget Password
export const forgetPassword = async (req, res)=>{
  const user = await User.findOne({ email: req.body.email });

  if (user) {
      const token = setToken(user);
      res.setHeader('authorization', token);
      console.log("token: "+token);
      return token;
  } 
}

// Reset Password
export const resetPassword = async (userdata) => {

  const user1 = await User.findByIdAndUpdate({_id:userdata._id},{password:userdata.password}, {new:true});
  
  return user1;

};

//login user
export const loginUser = async (body,res) => {
  try {
    const user = await User.findOne({ email: body.email });
    // If a user with the provided email is found
    if (user) {
      if (user.password === body.password) {
        // Passwords match, return the user object
        const token = setToken(user);
        res.setHeader('authorization', token);
        console.log("token: "+token);
        return user;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error in loginUser:', error);
    throw error; // Rethrow the error for handling at a higher level
  }
};


