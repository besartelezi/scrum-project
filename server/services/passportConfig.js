const LocalStrategy = require("passport-local").Strategy;
const db = require("./dbConfig");
const bcrypt = require("bcrypt");

function initialize(passport) {
  const authenticateUser = (email, password, done) => {
    db.query(`SELECT * FROM users WHERE email=$1`, [email], (err, result) => {
      if (err) {
        throw err;
      }
      if (result.rows.length) {
        const user = result.rows[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            throw err;
          }

          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password is not correct" });
          }
        });
      } else {
        return done(null, false, { message: "Email is not registered" });
      }
    });
  };

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      authenticateUser
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    db.query(`SELECT * FROM users WHERE id=$1`, [id], (error, result) => {
      if (error) {
        throw error;
      }
      return done(null, result.rows[0]);
    });
  });
}

module.exports = initialize;
