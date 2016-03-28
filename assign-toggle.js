import _ from 'lodash';
// Accepts - 1 source as a string, or multiple sources as an array.
// Returns - sources as key, and target as !target in a {key:!target} format.

const AssignToggle = (target, sources) => {
  let toggledObject;
  if (Array.isArray(sources)) {
    toggledObject = _.assign({}, target,
      ...sources.map((key) => {
        return { [key]: !target[key] };
      })
    );
  } else {
    toggledObject = _.assign({}, target, { [sources]: !target[sources] });
  }
  return toggledObject;
};
export default AssignToggle;
