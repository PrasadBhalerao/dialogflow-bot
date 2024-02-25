const { mobileNumberValidator } = require('../helpers/generic-helper');
const { constants } = require('../models/constants');

function getMobileNumberIntentHandler(agent) {
    const mobile = agent.parameters["mobileNumber"];
    const isMobileNumberValid = mobileNumberValidator(mobile);
    const initial_chat_intent = agent.context.contexts?.initial_context?.parameters?.initial_chat_intent;

    if (isMobileNumberValid) {
        agent.add('Received mobile number');
        if (initial_chat_intent == constants.chat_intents.portfolio_valuation) agent.setFollowupEvent(constants.events.showUserPortfolio);
        else if (initial_chat_intent == constants.chat_intents.transaction_history) agent.setFollowupEvent(constants.events.getDateRangeForTransactionHistoryEvent);
        else if (initial_chat_intent == constants.chat_intents.fund_explorer) {
            agent.add('Your interest for investing in this fund is recorded successfully!')
            agent.setFollowupEvent(constants.events.showThankYouEvent);
        };
    }
    else {
        agent.add('getMobileNumberIntentHandler');
        agent.setFollowupEvent(constants.events.getMobileNumberEvent);
    }
}

module.exports = { getMobileNumberIntentHandler };