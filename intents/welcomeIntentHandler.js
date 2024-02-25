const { constants } = require('../models/constants');
const { Suggestion } = require('dialogflow-fulfillment');

function welcomeIntentHandler(agent) {
    agent.add(constants.messages.welcomeMessage);
    agent.add(new Suggestion(constants.messages.portfolioValuation));
    agent.add(new Suggestion(constants.messages.fundExplorer));
    agent.add(new Suggestion(constants.messages.transactionHistory));
}

module.exports = { welcomeIntentHandler };