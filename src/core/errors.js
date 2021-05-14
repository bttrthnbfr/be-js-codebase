import httpStatus from 'http-status';

export default {
  INTERNAL_ERROR: ({ details } = {}) => ({
    code: 9999,
    HTTPStatus: httpStatus.INTERNAL_SERVER_ERROR,
    message: 'errors.internal error',
    details,
  }),
  VALIDATION_ERROR: ({ details } = {}) => ({
    code: 10001,
    HTTPStatus: httpStatus.BAD_REQUEST,
    message: 'errors.validation error or not valid',
    details,
  }),
  EMAIL_IS_NOT_VALID: ({ email, details } = {}) => ({
    code: 10002,
    HTTPStatus: httpStatus.BAD_REQUEST,
    message: `errors.email ${email} is not valid`,
    details,
  }),
};
