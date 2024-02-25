const { getFormattedDate } = require('../helpers/generic-helper');
const { constants } = require('../models/constants');

function getTransactionHistoryDateRangeIntentHandler(agent) {
    const dateRange = agent.parameters["date-period"];
    if (dateRange && dateRange[0]) {
        const startDate = new Date(dateRange[0].startDate);
        const endDate = new Date(dateRange[0].endDate);
        if (endDate > new Date() || startDate > new Date()) {
            agent.add(`Please provide a time period \nQuick Suggestions \n - Current finanical year \n - Last financial year \n - Enter Start and End dates`);
        }
        else {
            let text = `Transactions in the period from ${getFormattedDate(startDate)} to ${getFormattedDate(endDate)} are-`;
            //TODO: filter transactions from data file
            text += 'Quantity \t Sharename \t Price \n100 \t SBI \t 600 \n200 \t Titan \t 3600 \n300 \t TataMotors \t 900 ';
            agent.add(text);
            agent.add('Do you want to invest more?');
        }
    }
    else {
        agent.add(`getTransactionHistoryDateRangeIntentHandler`);
        agent.setFollowupEvent(constants.events.getDateRangeForTransactionHistoryEvent);
    }
}

module.exports = { getTransactionHistoryDateRangeIntentHandler };