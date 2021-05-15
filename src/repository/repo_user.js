import db from '../db/sequelize';
import errors from '../errors';
import { throwInternalError } from '../shared/error';
import pipeline from '../shared/pipeline';
import { localReadStream, localWriteStream } from '../storage/local';

class RepoUser {
  constructor() {
    this.db = db;
  }

  createUser(user) {
    const newUser = this.db.Users.create({
      email: user.email,
    });

    return newUser;
  }

  async uploadFileStream(fileStream, fileOrignalName) {
    let fileName = `${Date.now()}-${fileOrignalName}`;
    fileName = fileName.split(' ').join('-'); // replace space with dash

    await pipeline(fileStream, localWriteStream(fileName));
    return fileName;
  }

  async readFileStream(filename) {
    const readStream = await localReadStream(filename);
    return readStream;
  }
}

export default RepoUser;
