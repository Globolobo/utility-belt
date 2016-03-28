// Attaches listeners to object to prevent event bubbling while other events are underway.
// Accepts - object, starting event as sting, ending event as string, and event to prevent as string
// Returns - object with new listeners.


const objPreventDefaultWhile = (obj, onEventStart, onEventEnd, preventEvent) => {
  obj.on(onEventStart, () => {
    document.addEventListener(preventEvent, (e) => {
      e.preventDefault();
    });
  });
  obj.on(onEventEnd, () => {
    document.removeEventListener(preventEvent, (e) => {
      e.preventDefault();
    });
  });
  return obj;
};

export default objPreventDefaultWhile;
