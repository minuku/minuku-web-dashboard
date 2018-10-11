import _ from "lodash";

// copy from here: https://stackoverflow.com/questions/38275753/how-to-remove-empty-values-from-object-using-lodash
function removeEmptyObjects(obj) {
  return _(obj)
    .pickBy(_.isObject) // pick objects only
    .mapValues(removeEmptyObjects) // call only for object values
    .omitBy(_.isEmpty) // remove all empty objects
    .assign(_.omitBy(obj, _.isObject)) // assign back primitive values
    .value();
}

export default removeEmptyObjects;
