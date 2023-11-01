const express = require('express');
const app = express();
const loginRoute = require('./backend/routes/loginRoutes');
const registerRoute = require('./backend/routes/registerRoutes');
const port = 4000; // Define the port number for your server

app.listen(port, () => {
    console.log(`Server started listening successfully on port ${port}`);
});

app.use(express.json());

// Define your API routes
app.use('/api', loginRoute); // This line will handle routes like /api/login
app.use('/api/addUser', registerRoute);


// Handle any other API routes
app.get('/api', (req, res) => {
    // Handle your API routes here
    res.send('API is working');
});
