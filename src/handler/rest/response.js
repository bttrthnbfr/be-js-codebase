import httpStatus from 'http-status';

const messageSuccess = 'success';
const messageError = 'error';
const defaultMessageError = 'unknown errors';

const defaultErrorCode = 99999;
const defaultErrorHTTPStatus = httpStatus.INTERNAL_SERVER_ERROR;

export const responseDetail = (isSucess, data, message, details, errorCode) => {
  const res = {
    status: messageSuccess,
    errorCode: errorCode || 0,
    data: data || {},
    message: message || '',
    details: details || {},
  };

  if (isSucess) {
    delete res.errorCode;
    delete res.details;

    if (res.message === '') {
      res.message = messageSuccess;
    }

    return res;
  }

  delete res.data;
  res.status = messageError;
  return res;
};

const sendPayload = (reply, payload, code = 200) => {
  reply
    .code(code)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(payload);
};

const parseResponseFromInternalError = (err) => {
  // TODO show error when debug mode is on/true

  let errorCode = defaultErrorCode;
  let errorMessage = defaultMessageError;
  let errorDetails = {};
  let errorHTTPStatus = defaultErrorHTTPStatus;

  if (err.isInternalError) {
    errorCode = err.code;
    errorMessage = err.message;
    errorDetails = err.details;
    errorHTTPStatus = err.HTTPStatus;
  }

  return [responseDetail(false, null, errorMessage, errorDetails, errorCode), errorHTTPStatus];
};

export default async (rep, result) => {
  try {
    // eslint-disable-next-line no-param-reassign
    result = await result();
    sendPayload(rep, responseDetail(true, result));
  } catch (err) {
    const parseInternalError = parseResponseFromInternalError(err);

    const payload = parseInternalError[0];
    const errorHTTPStatus = parseInternalError[1];

    sendPayload(rep, payload, errorHTTPStatus);
  }
};
