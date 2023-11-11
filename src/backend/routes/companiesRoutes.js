const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// Define the route for user login
router.get('/sponsors', companyController.getAllCompanies);
router.post('/addCompany', companyController.postCompany);

module.exports = router;