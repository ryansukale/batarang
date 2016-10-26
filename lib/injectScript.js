function injectScript(src) {
  var script = document.createElement("script");
  script.src = config.src;
  script.async = true;
  document.body.appendChild(script);
}

module.exports = injectScript;