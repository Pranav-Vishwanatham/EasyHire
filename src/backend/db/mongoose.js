const mongoose = require( "mongoose" );

mongoose.connect("mongodb+srv://sushmadeegoju98:Sushm%4019981981@easyhire.kgdvab8.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Add this option to use the new Server Discover and Monitoring engine
});