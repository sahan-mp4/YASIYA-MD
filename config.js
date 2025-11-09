const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~gUoiCTzS#8Zj70-jOe5d4OpZ2Xne9pO8-02WeV5CYBeQ4PJckIyI'
};
