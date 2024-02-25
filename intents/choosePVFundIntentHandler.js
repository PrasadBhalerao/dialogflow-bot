const { pancardArray } = require('../data/data');
const { constants } = require('../models/constants');

function choosePVFundIntentHandler(agent) {
    let text = 'Please select your folio- \nQuick suggestion';
    for (let i = 0; i < pancardArray.length; i++) {
        text += '\n-' + pancardArray[i].id;
    }
    agent.add(text);
}

module.exports = { choosePVFundIntentHandler };