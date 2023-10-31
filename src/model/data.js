const fs = require('fs');

function read() {
    try{
        const users = JSON.parse(fs.readFileSync('model/users.json', 'utf-8')).users;
        return users;
    }
    catch(error) {
        console.log('Error reading the file', error);
        return [];
    }
}

function write(data) {
    try{
        const modifiedUsers = JSON.parse(fs.readFileSync('model/users.json', 'utf-8')).users;
        modifiedUsers.push(data);
        const userData = { users : modifiedUsers};
        console.log(userData);
        fs.writeFileSync('model/users.json', JSON.stringify(userData, null, 2), 'utf-8');
    }
    catch(error) {
        console.log('Error writing to the file', error);
    }
}

module.exports = { read, write };