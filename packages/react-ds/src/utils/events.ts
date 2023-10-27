/**
 * Generic function to apply multiple handlers to an event. It gives the 
 * possibility to consumers to supply their own event listeners on top of 
 * the default listeners defined in the component.
 * 
 * @param {Array<Function>} handlers array of functions to apply to the event
 * @returns {Function}
 */
export const composeEventHandlers = handlers => (event, ...args) => {
  for (let i=0; i<handlers.length; i++) {
    if (event.preventDefault()) {
      break;
    }
      
    if (typeof handlers[i] === 'function') {
      handlers[i](event, ...args)
    }
  }
}