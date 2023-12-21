import Joi, { ObjectSchema } from 'joi';

const loginSchema: ObjectSchema = Joi.object().keys({
  username: Joi.string().required().min(8).max(24).messages({
    'string.base': 'Username must be of type string',
    'string.min': 'Username must be at least 8 characters long',
    'string.max': 'Username must not be long than 24 characters',
    'string.empty': 'Username must not be empty'
  }),
  password: Joi.string().required().min(8).max(16).messages({
    'string.base': 'Password must be a string',
    'string.min': 'Too short. Someone may easily crack your password.',
    'string.max': 'Too Long. I doubt that you would be able to remember that much long password',
    'string.empty': 'Password missing. Please provide correct password.'
  })
})

const signupSchema: ObjectSchema = Joi.object().keys({});

export { signupSchema, loginSchema }