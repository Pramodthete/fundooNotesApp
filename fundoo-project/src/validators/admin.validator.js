import Joi from '@hapi/joi';

export const newadminValidator = (req, res, next) => {
  const schema = Joi.object({
    fName: Joi.string().min(3).required(),
    lName: Joi.string().min(3).required(),
    
    email: Joi.string().min(3).required(),
    password: Joi.string(),
    role:Joi.string().default("admin")

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
