const { fundSuggestions } = require('../data/data');
const { constants } = require('../models/constants');

function fundExplorerIntentHandler(agent) {
    const parameters = {};
    parameters.initial_chat_intent = "fund_explorer";
    agent.context.set({
        name: 'initial_context',
        lifespan: 10,
        parameters: parameters
    });
    let text = 'Here are the fund categories you can select to view. \nQuick suggestions :';
    for (let i = 0; i < fundSuggestions.length; i++) {
        text += '\n - ' + fundSuggestions[i].name;
    }
    agent.add(text);
}

module.exports = { fundExplorerIntentHandler };