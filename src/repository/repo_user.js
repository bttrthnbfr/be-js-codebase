import db from '../db/sequelize';

class RepoUser {
  constructor() {
    this.db = db;
  }

  createUser(user) {
    const newUser = this.db.Users.create({
      email: user.email,
    });

    return newUser;
  }
}

export default RepoUser;
