const { read } = require('../model/data.js');

const getUserData = async (req, res) => {
    try {
        const email = req.params.email;
        const password = req.params.password;
        console.log("login entered: " + email); 
        const users = await read();
        console.log("check user reception: " + email + " " + password);
        const user = users.filter(user => user.email === email && user.password === password);
        console.log(user);
        if(user.length){
            res.json(user); // Sending the user back as a response
        } else {
            throw new Error("User Not Found");
        }
    } catch(error) {
        throw new Error("Something went wrong: " + error);
    }
}

module.exports = getUserData;