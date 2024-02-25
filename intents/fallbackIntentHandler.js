const { constants } = require('../models/constants');

function fallbackIntentHandler(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
}

module.exports = { fallbackIntentHandler };