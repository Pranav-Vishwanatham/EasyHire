const express = require('express');
const app = express();
const cors = require('cors');
const loginRoute = require('./backend/routes/loginRoutes');
const registerRoute = require('./backend/routes/registerRoutes');
const getAlljobSeekersRoute = require('./backend/routes/jobSeekerRoutes');
const companies = require("./backend/routes/companiesRoutes");
const port = 4000; // Define the port number for your server

app.listen(port, () => {
    console.log(`Server started listening successfully on port ${port}`);
});

app.use(express.json());
app.use(cors());

// Define your API routes
app.use('/api', loginRoute); // This line will handle routes like /api/login
app.use('/api', registerRoute);
app.use('/api', getAlljobSeekersRoute);
app.use('/api', companies);


// Handle any other API routes
app.get('/api', (req, res) => {
    // Handle your API routes here
    res.send('API is working');
});
