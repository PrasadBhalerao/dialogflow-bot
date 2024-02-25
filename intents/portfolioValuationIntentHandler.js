const { constants } = require('../models/constants');

function portfolioValuationIntentHandler(agent) {
    const parameters = {};
    parameters.initial_chat_intent = "portfolio_valuation";
    agent.context.set({
        name: 'initial_context',
        lifespan: 10,
        parameters: parameters
    });
    agent.add('Portfolio Valuation Intent');
    agent.setFollowupEvent(constants.events.getMobileNumberEvent);
}

module.exports = { portfolioValuationIntentHandler };