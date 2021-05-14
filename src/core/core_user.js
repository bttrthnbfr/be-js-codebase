import RepoUser from '../repository/repo_user';
import { throwInternalError } from '../utils/error';
import errors from './errors';

class CoreUser {
  constructor() {
    this.repoUser = new RepoUser();
  }

  getUser() {
    // test internal error
    throwInternalError(errors.EMAIL_IS_NOT_VALID());

    const user = {
      name: 'hafiz joundy',
      age: 21,
      address: 'gembongan',
    };

    return user;
  }

  createUser() {
    const email = 'hafizjoundys@gmail.com';
    return this.repoUser.createUser({
      email,
    });
  }
}

export default CoreUser;
