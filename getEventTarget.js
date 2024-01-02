// Capture the source of the event in normal elements
// as well as elements inside an open shadow root for web components
// Can be used to determine the keyCode
// let { nodeName } = getEventTarget(event);
// if (['TEXTAREA', 'INPUT'].includes(nodeName)) {
//     console.log('You selected an input field')
// }
function getEventTarget(event) {
    return event.composedPath()[0];
}