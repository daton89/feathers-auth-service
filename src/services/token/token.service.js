// Initializes the `token` service on path `/token`
const createService = require('./token.class.js');
const hooks = require('./token.hooks');

module.exports = function (app) {

  const options = {
    app
  };

  // Initialize our service with any options it requires
  app.use('/token', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('token');

  service.hooks(hooks);
};
