import RepoUser from '../../repository/repo_user';
import { throwInternalError } from '../../shared/error';
import errors from '../../errors';
import { validateCreateUser } from './validation';

class CoreUser {
  constructor() {
    this.repoUser = new RepoUser();
  }

  getUser() {
    // example using isInternalError
    // try {
    //   throwInternalError(errors.EMAIL_IS_NOT_VALID());
    // } catch (err) {
    //   console.log(isInternalError(errors.EMAIL_IS_NOT_VALID(), err));
    // }

    throwInternalError(errors.EMAIL_IS_NOT_VALID({ email: 'foo@gmail.com', details: { foo: 'bar' } }));

    const user = {
      name: 'hafiz joundy',
      age: 21,
      address: 'gembongan',
    };

    return user;
  }

  async createUser() {
    const email = 'email';
    // example using validation
    await validateCreateUser(email);

    return email;

    // return this.repoUser.createUser({
    //   email,
    // });
  }

  async uploadFileStream(fileStream, fileOrignalName) {
    const filename = await this.repoUser.uploadFileStream(fileStream, fileOrignalName);
    return {
      filename,
      link: `/user/upload/${filename}`,
    };
  }

  async readFileStream(filename) {
    const readStream = await this.repoUser.readFileStream(filename);
    return readStream;
  }
}

export default CoreUser;
