const express = require('express');
const router = express.Router();
const getAllCompaniesData = require('../controllers/companies');

// Define the route for user login
router.get('/recruiters', getAllCompaniesData);

module.exports = router;
