import CoreUser from '../../core/core_user';

class RestUser {
  constructor(server) {
    this.coreUser = new CoreUser();
    server.get('/user', this.getUser.bind(this));
    server.post('/user', this.createUser.bind(this));
  }

  getUser(req, rep) {
    return this.coreUser.getUser();
  }

  createUser(req, rep) {
    return this.coreUser.createUser();
  }
}

export default RestUser;
