const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~QMQShKKQ#S2cjWgRCydFaV1JBjZ06s2EUahjuVxqJm6D7-K231Zw'
};
