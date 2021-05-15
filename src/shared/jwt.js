import jwt from 'jsonwebtoken';
import config from '../config';

// eslint-disable-next-line import/prefer-default-export
export const jwtSign = (payload) => jwt.sign(payload, config.jwtSecret);
