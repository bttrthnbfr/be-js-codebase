import passport from 'passport';
import passportJWT from 'passport-jwt';
import config from '../../../config';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
}, (payload, cb) => {
  cb(null, payload);
}));
