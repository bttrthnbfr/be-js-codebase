import CoreAuth from '../../core/core_auth';
import response from './response';

class RestAuth {
  constructor(server) {
    this.coreAuth = new CoreAuth();
    server.post('/auth', this.auth.bind(this));
  }

  auth(req, res) {
    return response(res, () => this.coreAuth.auth());
  }
}

export default RestAuth;
