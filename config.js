const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~YZpinQQZ#qW-Na8i4Nitd1QdyGhlYc9k7Dye4AsOUQ13HHWs7DFY'
};
