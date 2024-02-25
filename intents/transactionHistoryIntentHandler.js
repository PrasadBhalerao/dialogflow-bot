const { constants } = require('../models/constants');

function transactionHistoryIntentHandler(agent) {
    const parameters = {};
    parameters.initial_chat_intent = constants.chat_intents.transaction_history;
    agent.context.set({
        name: 'initial_context',
        lifespan: 10,
        parameters: parameters
    });
    agent.add('Transaction History Intent');
    agent.setFollowupEvent(constants.events.getMobileNumberEvent);

}

module.exports = { transactionHistoryIntentHandler };