import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
const secret = process.env.SECRET_KEY;

/**
 * Middleware to authenticate if admin has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const adminAuth = async (req,res, next) => {
  try {
    let bearerToken = req.header('authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const admin = await jwt.verify(bearerToken, secret);
    console.log("role---->",admin.role);
    // we can also attach the admin object to the request if needed
    // req.admin = admin;
    // if(req.body.role){
    //   req.body._id = admin._id
    if(admin.role==="admin"){
      next()
    }else{
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Admin Authorization token is required'
      };
    }
      
    
  } catch (error) {
    next(error);
  }
};

export function setToken(admin){
  return jwt.sign({
    email:admin.email,
    role:admin.role
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
