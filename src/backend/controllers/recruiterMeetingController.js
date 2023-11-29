// recruiterMeetingRoutes.js
const recruiterMeetingModel = require("../model/recruiterMeetings");
const mongoose = require('mongoose');

// Endpoint to create a job seeker meeting
const postRecruiterMeeting = async (req, res) => {
    const meeting = new recruiterMeetingModel(req.body);
    try {
        await meeting.save();
        res.status(201).json(meeting);
    } catch (error) {
        console.error("Error creating job seeker meeting:", error);
        res.status(500).json({ error: "Internal Server Error" });
    };
};

// Endpoint to retrieve all job seeker meetings
const getRecruiterMeetings = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
      }
    try {
        const meetings = await recruiterMeetingModel.find({recruiter:id});
        res.status(200).json(meetings);
    } catch (error) {
        console.error("Error retrieving job seeker meetings:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getRecruiterMeetings, postRecruiterMeeting };
