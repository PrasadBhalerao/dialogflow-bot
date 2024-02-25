const { choosePVFundIntentHandler } = require('./choosePVFundIntentHandler');
const { chooseFEFundIntentHandler } = require('./chooseFEFundIntentHandler');
const { fallbackIntentHandler } = require('./fallbackIntentHandler');
const { fundExplorerIntentHandler } = require('./fundExplorerIntentHandler');
const { getFundNumberIntentHandler } = require('./getFundNumberIntentHandler');
const { getMobileNumberIntentHandler } = require('./getMobileNumberIntentHandler');
const { getPancardNumberIntentHandler } = require('./getPancardNumberIntentHandler');
const { investIntentHandler } = require('./investIntentHandler');
const { portfolioValuationIntentHandler } = require('./portfolioValuationIntentHandler');
const { showFundDetailsIntentHandler } = require('./showFundDetailsIntentHandler');
const { showPortfolioValueIntentHandler } = require('./showPortfolioValueIntentHandler');
const { transactionHistoryIntentHandler } = require('./transactionHistoryIntentHandler');
const { getTransactionHistoryDateRangeIntentHandler } = require('./getTransactionHistoryDateRangeIntent.js');
const { welcomeIntentHandler } = require('./welcomeIntentHandler');
const { investMoreIntentHandler } = require('./investMoreIntentHandler');
//const { initialContextIntentHandler } = require('./initialContextIntentHandler');
const { thankYouIntentHandler } = require('./thankYouIntentHandler');

let intentMap = new Map();
intentMap.set('Default Welcome Intent', welcomeIntentHandler);
intentMap.set('Default Fallback Intent', fallbackIntentHandler);
//intentMap.set('Initial Context Intent', initialContextIntentHandler);
intentMap.set('Thank You Intent', thankYouIntentHandler);

intentMap.set('Portfolio Valuation Intent', portfolioValuationIntentHandler);
intentMap.set('PV - Choose Fund Intent', choosePVFundIntentHandler);
intentMap.set('Show Portfolio Value Intent', showPortfolioValueIntentHandler);

intentMap.set('Fund Explorer Intent', fundExplorerIntentHandler);
intentMap.set('FE - Choose Fund Intent', chooseFEFundIntentHandler);
intentMap.set('Show Fund Details Intent', showFundDetailsIntentHandler);
intentMap.set('Invest Intent', investIntentHandler);

intentMap.set('Transaction History Intent', transactionHistoryIntentHandler);
intentMap.set('Get Transaction History Date Range Intent', getTransactionHistoryDateRangeIntentHandler);
intentMap.set('Invest More Intent', investMoreIntentHandler);

intentMap.set('Get Pancard Intent', getPancardNumberIntentHandler);
intentMap.set('Get Mobilenumber Intent', getMobileNumberIntentHandler);
intentMap.set('Get Fund Number Intent', getFundNumberIntentHandler);


module.exports = { intentMap: intentMap };