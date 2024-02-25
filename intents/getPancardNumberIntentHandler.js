const { pancardArray } = require('../data/data');
const { constants } = require('../models/constants');
const { getFormattedDate } = require('../helpers/generic-helper');

function getPancardNumberIntentHandler(agent) {
    let pancardNumber = (agent.parameters["pancardNumber"] || '').toUpperCase();
    let index = pancardArray.findIndex(x => x.id == pancardNumber);
    if (index > -1) {
        let text = `Your portfolio - ${pancardArray[index].folioName} valuation is ${pancardArray[index].value} on ${getFormattedDate(new Date())}`;
        agent.add(text);
    }
    else {
        agent.add('Portfolio Valuation - Selected Fund');
        agent.setFollowupEvent(constants.events.showUserPortfolio);
    }
}

module.exports = { getPancardNumberIntentHandler };