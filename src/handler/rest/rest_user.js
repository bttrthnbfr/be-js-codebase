import CoreUser from '../../core/core_user';
import response from './response';

class RestUser {
  constructor(server) {
    this.coreUser = new CoreUser();
    server.get('/user', this.getUser.bind(this));
    server.post('/user', this.createUser.bind(this));
  }

  async getUser(req, rep) {
    // try {
    //   const result = await this.coreUser.getUser();
    //   console.log(result);
    // } catch (err) {
    //   console.log(err);
    // }

    // return 'test';
    return response(() => this.coreUser.getUser());
  }

  createUser(req, rep) {
    return this.coreUser.createUser();
  }
}

export default RestUser;
