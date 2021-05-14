export default {
  INTERNAL_ERROR: ({ details }) => ({
    errorCode: '9999',
    errorMessage: 'errors.internal error',
    errorDetails: details,
  }),
  VALIDATION_ERROR: ({ details }) => ({
    errorCode: '0001',
    errorMessage: 'errors.validation error or not valid',
    errorDetails: details,
  }),
  EMAIL_IS_NOT_VALID: ({ details }) => ({
    errorCode: '0002',
    errorMessage: 'errors.email is not valid',
    errorDetails: details,
  }),
};
