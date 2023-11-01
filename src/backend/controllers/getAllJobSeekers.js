const { read } = require('../model/data.js');

const getAllJobSeekersData = async (req, res) => {
    try {
        const users = await read();
        console.log(users);
        const jobSeekers = await users.filter(user => user.designation == 'Job Seeker');
        console.log('Job Seekers fetched successfully!!! ');
        console.log(jobSeekers);
        res.json(jobSeekers);
        // res.sendStatus(200);
    } catch(error) {
        throw new Error("Something went wrong: " + error);
    }
}

module.exports = getAllJobSeekersData;