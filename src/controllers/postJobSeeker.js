const { write } = require('../model/data.js');

const postUserData = async (user) => {
    try {
       await write(user);
       console.log("Written User data successfully");
    } catch(error) {
        throw new Error("Something went wrong: " + error);
    }
}

module.exports = postUserData;