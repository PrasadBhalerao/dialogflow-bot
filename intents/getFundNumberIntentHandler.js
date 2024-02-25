const { funds } = require('../data/data');
const { constants } = require('../models/constants');

function getFundNumberIntentHandler(agent) {
    const number = agent.parameters["fundId"];
    let fundIndex = funds.findIndex(x => x.id == parseInt(number));
    if (fundIndex > -1) {
        agent.add('getFundNumberIntentHandler');
        agent.setFollowupEvent(constants.events.showFundDetailsEvent);
    }
    else {
        agent.add('getFundNumberIntentHandler');
        agent.setFollowupEvent(constants.events.getFundNumberEvent);
    }
}
module.exports = { getFundNumberIntentHandler };