/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  async get (id, params) {
    const { app } = this.options;
    const { secret } = app.get('authentication');
    try {
      const payload = await app.passport.verifyJWT(id, {secret});
      return payload;
    } catch (error) {
      return error;
    }
  }

}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
