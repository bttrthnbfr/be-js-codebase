import CoreUser from '../../core/core_user';
import response from './response';

class RestUser {
  constructor(server) {
    this.coreUser = new CoreUser();
    server.get('/user', this.getUser.bind(this));
    server.post('/user', this.createUser.bind(this));
  }

  async getUser(_, rep) {
    return response(rep, () => this.coreUser.getUser());
  }

  createUser() {
    return this.coreUser.createUser();
  }
}

export default RestUser;
