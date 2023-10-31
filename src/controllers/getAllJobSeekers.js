const { read } = require('../model/data.js');

const getAllJobSeekersData = async (userId) => {
    try {
        const users = await read();
        const jobSeekers = users.filter(user => user.designation == 'jobSeeker');
        return jobSeekers;
    } catch(error) {
        throw new Error("Something went wrong: " + error);
    }
}

module.exports = getAllJobSeekersData;