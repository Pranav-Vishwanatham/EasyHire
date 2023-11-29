const jobSeekerMeetingModel = require("../model/jobSeekerMeetings");
const mongoose = require('mongoose');

// Endpoint to create a job seeker meeting
const postJobSeekerMeeting = async (req, res) => {
    const meeting = new jobSeekerMeetingModel(req.body);
    try {
        await meeting.save();
        res.status(201).json(meeting);
    } catch (error) {
        console.error("Error creating job seeker meeting:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Endpoint to retrieve all job seeker meetings
const getJobSeekerMeetings = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
      }
    try {
        const meetings = await jobSeekerMeetingModel.find({jobSeeker:id});
        res.status(200).json(meetings);
    } catch (error) {
        console.error("Error retrieving job seeker meetings:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getJobSeekerMeetings, postJobSeekerMeeting };
