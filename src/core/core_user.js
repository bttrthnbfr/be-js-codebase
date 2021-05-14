import RepoUser from '../repository/repo_user';

class CoreUser {
  constructor() {
    this.repoUser = new RepoUser();
  }

  getUser() {
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
