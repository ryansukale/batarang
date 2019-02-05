var createUrl = require('./createUrl');

function createRouter(routes) {
  function get(name, options) {
    var path = routes[name];

    if (!path) {
      throw new Error('No route found for the name "' + name + '"');
    }

    return options ? createUrl(path, options) : path;
  }

  return {
    get: get
  };
}

module.exports = createRouter;
