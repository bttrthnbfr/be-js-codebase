export class InternalError extends Error {
  constructor(internalError) {
    super(internalError.message);

    const {
      code, message, details, HTTPStatus,
    } = internalError;

    if (code === undefined) {
      throw new Error('code is required for internal error');
    }

    this.code = code;
    this.message = message;
    this.details = details;
    this.HTTPStatus = HTTPStatus;
    this.isInternalError = true;
  }
}

export const throwInternalError = (internalError) => {
  throw new InternalError(internalError);
};
