import Joi from '@hapi/joi';

export const newEmployeeValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    gender: Joi.string().min(3).required(),
    department: Joi.string().min(2).required(),
    salary: Joi.string().min(5).required(),
    startdate: Joi.string()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};