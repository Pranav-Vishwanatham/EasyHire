const express = require('express');
const router = express.Router();
const recruiterController = require('../controllers/recruiterController');

// Define the route for user login
router.get('/recruiters', recruiterController.getAllRecruiters);
router.post('/addRecruiter', recruiterController.postRecruiter);
router.get('/recruiters/:companyName', recruiterController.getRecruiter);

module.exports = router;