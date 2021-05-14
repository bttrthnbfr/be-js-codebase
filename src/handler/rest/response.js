export const responseDetail = (isSucess, data, message, details, errorCode) => {
  const res = {
    status: 'success',
    errorCode: errorCode || 0,
    data: data || {},
    message: message || '',
    details: details || {},
  };

  if (isSucess) {
    delete res.errorCode;
    delete res.details;

    if (res.message === '') {
      res.message = 'success';
    }

    return res;
  }

  delete res.data;
  res.status = 'error';
  return res;
};

export default async (result) => {
  try {
    // eslint-disable-next-line no-param-reassign
    result = await result();
    return responseDetail(true, result);
  } catch (err) {
    let errorCode = 9999;
    let errorMessage = 'unkown.internal error';
    let errorDetails = {};

    if (err.isInternalError) {
      errorCode = err.errorCode;
      errorMessage = err.errorMessage;
      errorDetails = err.errorDetails;
    }

    // TODO parse error
    return responseDetail(false, null, errorMessage, errorDetails, errorCode);
  }
};
