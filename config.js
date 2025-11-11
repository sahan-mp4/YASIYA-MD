const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~JMwHmKib#7WtaKsuBrsHYN12sHswoMs-CKc-qt_9MC325qZW2EIc'
};
