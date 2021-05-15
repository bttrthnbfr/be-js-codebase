import httpStatus from 'http-status';

export default {
  INTERNAL_ERROR: ({ details } = {}) => ({
    code: 99999,
    HTTPStatus: httpStatus.INTERNAL_SERVER_ERROR,
    message: 'errors.internal error',
    details,
  }),
  UNAUTHORIZED: ({ details } = {}) => ({
    code: 90001,
    HTTPStatus: httpStatus.UNAUTHORIZED,
    message: 'errors.unautorized error',
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
  ERROR_UPLOAD_FILE: ({ detail, details } = {}) => ({
    code: 10003,
    HTTPStatus: httpStatus.BAD_REQUEST,
    message: `errors.upload file: ${detail}`,
    details,
  }),
  ERROR_FILE_NOT_FOUND: ({ filename, details } = {}) => ({
    code: 10003,
    HTTPStatus: httpStatus.NOT_FOUND,
    message: `errors.file ${filename} not found`,
    details,
  }),
};
