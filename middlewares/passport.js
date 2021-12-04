const User = require("../models/user.model");
<<<<<<< HEAD
const { SECRET } = require("../config/db");
=======
const { SECRET } = require("../config/constant");
>>>>>>> user-register
const { Strategy, ExtractJwt } = require("passport-jwt");
const db = require("../config/db");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
};

module.exports = passport => {
  passport.use(
    new Strategy(opts, async (payload, done) => {
      await User.findById(payload.user_id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => {
          return done(null, false);
        });
    })
  );
};



