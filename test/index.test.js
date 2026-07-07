require('datejs');

function combineUsers(...args) {

    // Create the return object
    const combinedObject = {
        users: []
    };

    // Merge all arrays into the users array
    for (let array of args) {
        combinedObject.users = [...combinedObject.users, ...array];
    }

    // Add today's date
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

    // Return the completed object
    return combinedObject;
}

// Export the function
module.exports = {
    combineUsers
};