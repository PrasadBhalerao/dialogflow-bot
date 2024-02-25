const { getMobileNumber } = require('../helpers/generic-helper');
const { constants } = require('../models/constants');

function investIntentHandler(agent) {
    let mobileNumber = getMobileNumber(agent.context);
    agent.add('Received your interest to invest in this fund.');
    if (mobileNumber) {
        agent.setFollowupEvent(constants.events.showThankYouEvent);
    }
    else {
        agent.add('Your interest for investing in this fund is recorded successfully!')
        agent.setFollowupEvent(constants.events.getMobileNumberEvent);
    }
}

module.exports = { investIntentHandler };