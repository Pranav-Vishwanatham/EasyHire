const express = require('express');
const router = express.Router();
const getAllJobSeekers = require('../controllers/getAllJobSeekers');

// Define the route for user login
router.get('/jobSeekers', getAllJobSeekers);

module.exports = router;
