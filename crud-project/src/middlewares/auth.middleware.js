import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const secret = process.env.SECRET_KEY;

// Middleware for user authentication
export const userAuth = async (req,res, next) => {
  try {
    let bearerToken = req.header('authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const user = await jwt.verify(bearerToken, secret);
    console.log("userid---->",user._id);
    // You can also attach the user object to the request if needed
    // req.user = user;
    req.body._id = user._id
    next()
  } catch (error) {
    next(error);
  }
};

export function setToken(user){
  return jwt.sign({
    _id:user._id,
    email:user.email
  },secret);
}

export function getToken(token){
  if(!token) return null;

  try{
    return jwt.verify(token,secret);
  }catch(error){
    return null;
  }
}
