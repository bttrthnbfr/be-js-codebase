import { jwtSign } from '../shared/jwt';

class CoreAuth {
  auth() {
    const token = jwtSign({
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
