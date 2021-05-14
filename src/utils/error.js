export class InternalError extends Error {
  constructor(internalError) {
    super(internalError.errorMessage);

    this.errorCode = internalError.errorCode;
    this.errorMessage = internalError.errorMessage;
    this.errorDetails = internalError.errorDetails;
    this.isInternalError = true;
  }
}

export const throwInternalError = (internalError) => {
  throw new InternalError(internalError);
};
