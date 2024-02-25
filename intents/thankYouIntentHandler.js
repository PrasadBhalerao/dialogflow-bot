const { getMobileNumber } = require('../helpers/generic-helper');
const { constants } = require('../models/constants');

function thankYouIntentHandler(agent) {
    agent.end('Thank you for using our services.');
}

module.exports = { thankYouIntentHandler };