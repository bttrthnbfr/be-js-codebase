import { jwtSign } from '../../shared/jwt';

class CoreAuth {
  constructor() {
    this.jwtSign = jwtSign;
  }

  auth() {
    const token = this.jwtSign({
      name: 'hafiz joundy',
      email: 'hafiz@gmail.com',
      role: 'admin',
    });

    return {
      token,
    };
  }
}

export default CoreAuth;
