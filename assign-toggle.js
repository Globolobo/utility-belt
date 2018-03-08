import _ from 'lodash';
// Accepts: 1 source as a string, or multiple sources as an array.
// Returns: sources as key, and target as !target in a {key:!target} format.

const AssignToggle = (target, sources) => 
  ({
    _.assign({}, target, Array.isArray(sources) ? 
        ...sources.map((key) => ({ [key]: !target[key] });
        :
        { [sources]: !target[sources] });
  })

export default AssignToggle;
