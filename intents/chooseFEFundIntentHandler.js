
const { funds } = require('../data/data');
const { constants } = require('../models/constants');

function chooseFEFundIntentHandler(agent) {
    //fallback to equity funds if not found
    let fundType = (agent.parameters['fundType'] || 'equity').toLowerCase(); 
    let filteredFunds = funds.filter(x => x.type == fundType);
    
    let text = 'Select from the below option(s): \nEnter option number:';
    for (let i = 0; i < filteredFunds.length; i++) {
        text += `\nEnter ${(i + 1).toString()} ${filteredFunds[i].fundName}`;
    }
    agent.add(text);
}

module.exports = { chooseFEFundIntentHandler };