require('datejs');

function combineUsers(...args) {

  // Create the return object
  const combinedObject = {
    users: []
  };

  // Merge all arrays into one
  for (let array of args) {
    combinedObject.users = [...combinedObject.users, ...array];
  }

  // Add today's date
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // Return the object
  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};