import config from '../../config';
import errors from '../../errors';
import logger from '../../shared/logger';

const messageSuccess = 'success';
const messageError = 'error';
const defaultMessageError = 'unknown errors';

const defaultErrorCode = errors.INTERNAL_ERROR().code;
const defaultErrorHTTPStatus = errors.INTERNAL_ERROR().HTTPStatus;

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

export const sendPayload = (res, payload, code = 200) => {
  res.status(code).json(payload);
};

export const parseResponseFromInternalError = (err) => {
  if (config.debug) {
    logger.error(err);
  }

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

export const sendPayloadFromInternalError = (res, internalError) => {
  const parseInternalError = parseResponseFromInternalError(internalError);
  const payload = parseInternalError[0];
  const errorHTTPStatus = parseInternalError[1];

  return sendPayload(res, payload, errorHTTPStatus);
};

export default async (res, result) => {
  try {
    // eslint-disable-next-line no-param-reassign
    result = await result();
    return sendPayload(res, responseDetail(true, result));
  } catch (err) {
    return sendPayloadFromInternalError(res, err);
  }
};
