const postJobSeekerData = require('../controllers/postJobSeeker.js');
const getAllJobSeekersData = require('../controllers/getAllJobSeekers.js');

const displayJobSeekers = async (req, res) => {
    try {
        const users = await getAllJobSeekersData();
        res.json(users);
    } catch (error) {
        res.status(404).send(error.message); // Sending error message if user not found
    }
}

const addJobSeeker = async (req, res) => {
    try {
        console.log("entered, " + req.body.user);
        const userData = req.body.user;
        console.log("User Data: " + userData);
        await postJobSeekerData(userData);
        res.status(201).send("User Added Successfully!");
    } catch (error) {
        res.status(404).send(error.message); // Sending error message if user not found
    }
}

module.exports = { displayJobSeekers, addJobSeeker };