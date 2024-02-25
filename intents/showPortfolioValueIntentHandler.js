const { pancardArray } = require('../data/data');
const { constants } = require('../models/constants');

function showPortfolioValueIntentHandler(agent) {
    let pancardNumber = agent.parameters["pancardNumber"];
    let index = pancardArray.findIndex(x => x.id == pancardNumber);
    if (index == -1) {
        agent.add('Portfolio Valuation - Selected Fund');
        agent.setFollowupEvent(constants.events.getPANInfoEvent);
    }
    else {
        let text = `Your portfolio - ${pancardArray[index].folioName} valuation is ${pancardArray[index].value} on ${new Date().toString()}`;
        agent.add(text);
    }
}

module.exports = { showPortfolioValueIntentHandler };