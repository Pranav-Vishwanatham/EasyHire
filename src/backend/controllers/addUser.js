const { write } = require('../model/data.js');

const addUserData = async (req, res) => {
    try {
        const user = req.body;
        await write(user);
        console.log("Written User data successfully");
        res.sendStatus(201);
    } catch(error) {
        throw new Error("Something went wrong: " + error);
    }
}

module.exports = addUserData;