import CoreUser from '../../core/core_user';

class RestUser {
  constructor(server) {
    this.coreUser = new CoreUser();
    server.get('/user', this.getUser.bind(this));
  }

  getUser(req, rep) {
    return this.coreUser.getUser();
  }
}

export default RestUser;
