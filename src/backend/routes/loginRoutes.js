const express = require('express');
const router = express.Router();
const validateUser = require('../controllers/validateUser');
const addUser = require('../controllers/addUser');

// Define the route for user login
router.post('/validate', validateUser);
router.post('/addUser', addUser);

module.exports = router;
