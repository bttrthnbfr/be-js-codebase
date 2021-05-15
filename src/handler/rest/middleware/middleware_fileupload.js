import multer from 'multer';
import errors from '../../../errors';
import { internalError } from '../../../shared/error';
import { sendPayloadFromInternalError } from '../response';

const upload = multer({
  limits: {
    fileSize: 1048576 * 5, // 5mb limit size
  },
});

// this middleware will be append file variable in req object
// notes: very recomended using file.stream to save / pipe file to storage like minio/awsS3
export const uploadSingleFile = (fieldName) => (req, res, next) => {
  upload.single(fieldName)(req, res, (err) => {
    if (err) {
      const errMessage = err.message.toLowerCase();
      return sendPayloadFromInternalError(
        res,
        internalError(errors.ERROR_UPLOAD_FILE({ detail: errMessage })),
      );
    }
    return next();
  });
};
