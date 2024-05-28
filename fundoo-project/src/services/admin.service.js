import sequelize, { DataTypes } from '../config/database';
const Admin = require('../models/admin')(sequelize, DataTypes);
const bcrypt = require('bcrypt');

import {setToken} from '../middlewares/auth.middleware'
// import jwt from 'jsonwebtoken';
require('dotenv').config();

//Register new admin
export const registeradmin = async (body) => {
  const checkForadmin = await Admin.findOne({where:{email: body.email } });
  if(checkForadmin == null){
    body.password= await bcrypt.hash(body.password,10);
    const data = await Admin.create(body);
    return data;
  }else{
    return {
      code:201,
      data:data,
      message: 'admin created successfully'
    }
  }
  
};
// Forget Password
export const forgetPassword = async (req, res)=>{
  const admin = await Admin.findOne({ email: req.body.email });

  if (admin) {
    
      const token = setToken(admin);
      res.setHeader('authorization', token);
      console.log("token: "+token);
      console.log(admin);
      return token;
  }
  return token; 
}

// Reset Password
export const resetPassword = async (admindata) => {
  const admin1 = await Admin.findOne({password:admindata.password});
  const data=await admin1.update({admindata});
  return data;

};

//login admin
export const loginadmin = async (body,res) => {
  try {
    const admin = await Admin.findOne({where :{email: body.email }});
    // If a admin with the provided email is found
    if (admin) {
      const checkPassword = await bcrypt.compare(body.password, admin.dataValues.password);

      if (checkPassword) {
        // Passwords match, return the admin object
        const token = setToken(admin);
        res.setHeader('authorization', token);
        console.log("token: "+token);
        return token;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error in loginadmin:', error);
    throw error; // Rethrow the error for handling at a higher level
  }
};
