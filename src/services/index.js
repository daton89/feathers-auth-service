const users = require('./users/users.service.js');
const token = require('./token/token.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(token);
};
