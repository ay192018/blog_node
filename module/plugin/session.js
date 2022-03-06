const session = require("express-session");
const MongoStore = require("connect-mongo");
// ^ 设置session
module.exports = session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 4,
  }, //~因为不是https 要设置成false
  store: MongoStore.create({
    mongoUrl: "mongodb://localhost:27017/blog",
  }),
});
