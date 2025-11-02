const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~lB5HFK7Q#VZmWE7xzBfwL-dioD2bo2vFwsIZfg2OorZ3ddE0g1Zg'
};
