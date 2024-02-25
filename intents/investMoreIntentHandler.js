const { getMobileNumber } = require('../helpers/generic-helper');
const { constants } = require('../models/constants');

function investMoreIntentHandler(agent) {
    const investMoreValue = agent.parameters["investMoreValue"]?.toString()?.toLowerCase();
    agent.add('Received your interest to invest in this fund.');

    if (investMoreValue == "y" || investMoreValue == "yes") {
        agent.setFollowupEvent(constants.events.fundExplorerEvent);
    }
    else {
        agent.setFollowupEvent(constants.events.showThankYouEvent);
    }
}

module.exports = { investMoreIntentHandler };