const { funds } = require('../data/data');
const { constants } = require('../models/constants');

function showFundDetailsIntentHandler(agent) {
    let fundIdFromContext = agent.context.contexts?.awaiting_fund_number?.parameters?.fundId;
    let fundId = fundIdFromContext || 1; //fallback to 1st fundId
    let fundIndex = funds.findIndex(x => x.id == fundId);
    agent.add(funds[fundIndex].description);
    agent.add(`Quick suggestion. \n- Invest \n- Main Menu`);
}

module.exports = { showFundDetailsIntentHandler };