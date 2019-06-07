var createUrl = require('./createUrl');

function createRouter(routes) {
  function get(name, options, config) {
    var path = routes[name];

    if (!path) {
      throw new Error('No route found for the name "' + name + '"');
    }

    return options ? createUrl(path, options, config) : path;
  }

  return {
    get: get
  };
}

module.exports = createRouter;
