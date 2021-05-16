import server from '.';
import CoreAuth from '../../core/auth/core_auth';
import response from './response';

class RestAuth {
  constructor() {
    this.coreAuth = new CoreAuth();
    server.post('/auth', this.auth.bind(this));
  }

  auth(req, res) {
    return response(res, () => this.coreAuth.auth());
  }
}

export default RestAuth;
