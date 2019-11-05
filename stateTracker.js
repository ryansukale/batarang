// const possibleStates = ['empty', 'full'];
// const initialState = 'full';

// function stateTracker(possibleStates, initialState) {
//   let state = initialState || possibleStates[0];
//   const properties = {
//     setState: (s) => {state = s;}
//   };

//   possibleStates.map( key => {
//       properties[key] = {
//         enumerable: true,
//         get: () => state === key
//       }
//     }
//   )

//   return properties;
// }

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

// const context.empty;

// export default stateTracker(possibleStates, initialState) {
//   const activeState = possibleStates[initialState];

//   for (const key of Object.keys(possibleStates)) {
//     return {
//     get() {
//       return activeState;
//     }
//     setState(key) {

//     }
//   }

//   return {
//     activeState: {
//       get activeState() => 'hello'
//     }
//   }
// }

