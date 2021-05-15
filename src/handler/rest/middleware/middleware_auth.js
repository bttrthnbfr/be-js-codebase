import './passport_strategy';
import passport from 'passport';
import { sendPayloadFromInternalError } from '../response';
import errors from '../../../errors';
import { internalError } from '../../../shared/error';

export const authRoles = {
  USER: 'user',
  ADMIN: 'admin',
};

export const isRoleAuthenticate = (role, reqRoles = []) => {
  if (reqRoles.length === 0) {
    return true;
  }
  if (reqRoles.includes(role)) {
    return true;
  }

  return false;
};

const passportCustomCallback = (req, res, next) => (err, user) => {
  if (err) {
    return sendPayloadFromInternalError(res, internalError(errors.INTERNAL_ERROR()));
  }

  if (user === false) {
    return sendPayloadFromInternalError(res, internalError(errors.UNAUTHORIZED()));
  }

  if (!isRoleAuthenticate(user.role, req.authRoles)) {
    return sendPayloadFromInternalError(res, internalError(errors.UNAUTHORIZED()));
  }

  return next();
};

const authJWT = (roles) => (req, res, next) => {
  req.authRoles = roles;
  passport.authenticate('jwt', { session: false }, passportCustomCallback(req, res, next))(req, res, next);
};

export default authJWT;
