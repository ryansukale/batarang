function stateTracker(possibleStates, initialState) {
  let state = initialState || possibleStates[0];
  const properties = {
    update: (s) => {state = s;}
  };

  possibleStates.map( key => {
      Object.defineProperty(properties, key, { get: function() { return state === key; } });
    }
  )

  return properties;
}

module.exports = stateTracker;