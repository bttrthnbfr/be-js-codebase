import CoreUser from '../../core/user/core_user';
import errors from '../../errors';
import { internalError } from '../../shared/error';
import { mimeLookup } from '../../shared/mime_types';
import authJWT, { authRoles } from './middleware/middleware_auth';
import { uploadSingleFile } from './middleware/middleware_fileupload';
import response, { sendPayloadFromInternalError } from './response';

class RestUser {
  constructor(server) {
    this.coreUser = new CoreUser();
    server.get('/user', authJWT([authRoles.ADMIN]), this.getUser.bind(this));
    server.post('/user', this.createUser.bind(this));
    server.post('/user/upload', uploadSingleFile('file'), this.uploadFile.bind(this));
    server.get('/user/upload/:filename', uploadSingleFile('file'), this.getFile.bind(this));
  }

  async getUser(req, res) {
    return response(res, () => this.coreUser.getUser());
  }

  async createUser(req, res) {
    return response(res, () => this.coreUser.createUser());
  }

  async uploadFile(req, res) {
    return response(res,
      () => this.coreUser.uploadFileStream(req.file.stream, req.file.originalName));
  }

  async getFile(req, res) {
    const { filename } = req.params;
    let fileExtention = filename.split('.');
    fileExtention = fileExtention[fileExtention.length - 1];

    res.setHeader('content-type', mimeLookup(fileExtention));

    const fileStream = await this.coreUser.readFileStream(filename);
    fileStream.on('error', (err) => {
      if (err.code === 'ENOENT') {
        return sendPayloadFromInternalError(res,
          internalError(errors.ERROR_FILE_NOT_FOUND({ filename })));
      }
      return sendPayloadFromInternalError(res,
        internalError(errors.INTERNAL_ERROR()));
    });

    fileStream.pipe(res);
  }
}

export default RestUser;
