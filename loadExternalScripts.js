
/* 
  Example Usage
  const config = [
    {
      variable: 'jQuery',
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
    }
  ];

  loadExternalScripts(config);
*/

var injectScript = require('./injectScript');

function loadExternalScripts(config) {
  config.map(cfg => {
    if (!window[cfg.variable]) {
      injectScript(cfg.src)
    }
  });
}

module.exports = loadExternalScripts;