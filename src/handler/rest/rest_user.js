import passport from 'passport';
import CoreUser from '../../core/core_user';
import authJWT, { authRoles } from './middleware/middleware_auth';
import response from './response';

class RestUser {
  constructor(server) {
    this.coreUser = new CoreUser();
    server.get('/user', authJWT([authRoles.ADMIN]), this.getUser.bind(this));
    server.post('/user', this.createUser.bind(this));
  }

  async getUser(req, res) {
    return response(res, () => this.coreUser.getUser());
  }

  createUser() {
    return this.coreUser.createUser();
  }
}

export default RestUser;
