import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    fname: Joi.string().min(4).required(),
    lname: Joi.string().min(2).required(),
    email: Joi.string().min(10).required(),
    password: Joi.string().min(5).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
