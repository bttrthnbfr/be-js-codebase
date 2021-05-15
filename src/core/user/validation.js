import Joi from 'joi';
import { validate } from '../../shared/validation';

export const validateCreateUser = async (email) => {
  await validate(Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  }), {
    email,
  });
};
