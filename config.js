const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~RMh3HarR#KpM490r2O0JcSxN8LxIjkIpBd_g8e47HaHFP0A4s6A8'
};
