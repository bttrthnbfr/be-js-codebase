import errors from '../errors';
import { throwInternalError } from './error';

export const validate = async (schema, data) => {
  try {
    await schema.validateAsync(data);
  } catch (err) {
    throwInternalError(errors.VALIDATION_ERROR({ details: { validation: err.details } }));
  }
};
