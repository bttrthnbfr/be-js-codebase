import db from '../db/sequelize';
import cache from '../cache/redis';
import pipeline from '../shared/pipeline';
import { localReadStream, localWriteStream } from '../storage/local';

const prefixUserCacheByEmail = (email) => `user:${email}`;

class RepoUser {
  constructor() {
    this.db = db;
    this.cache = cache;
  }

  createUser(user) {
    const newUser = this.db.Users.create({
      email: user.email,
    });

    return newUser;
  }

  async getUserByEmail(email) {
    const user = await this.cache.get(prefixUserCacheByEmail(email));
    // console.log(user);

    return JSON.parse(user);
  }

  async uploadFileStream(fileStream, filename) {
    await pipeline(fileStream, localWriteStream(filename));
  }

  async readFileStream(filename) {
    const readStream = await localReadStream(filename);
    return readStream;
  }
}

export default RepoUser;
