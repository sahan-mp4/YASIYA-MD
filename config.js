const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~cVhmBSqS#3TmvS9dCctOpSC9PtjKlYfYyUfbhRqqQFFGq1T7_4i8'
};
