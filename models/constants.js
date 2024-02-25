let constants = {
    events: {
        getMobileNumberEvent: 'getMobileNumberEvent',
        showFundDetailsEvent: 'showFundDetailsEvent',
        getFundNumberEvent: 'getFundNumberEvent',
        showUserPortfolio: 'showUserPortfolio',
        getDateRangeForTransactionHistoryEvent: 'getDateRangeForTransactionHistoryEvent',
        showThankYouEvent: 'showThankYouEvent',
        fundExplorerEvent: 'fundExplorerEvent',
        getPANInfoEvent: 'getPANInfoEvent',
    },
    messages: {
        welcomeMessage: 'Hi, Welcome to ABC Mutual Fund services.',
        portfolioValuation: 'Portfolio Valuation',
        fundExplorer: 'Fund Explorer',
        transactionHistory: 'Transaction History',
    },
    chat_intents: {
        transaction_history: 'transaction_history',
        fund_explorer: 'fund_explorer',
        portfolio_valuation: 'portfolio_valuation',
    }

}

module.exports = { constants };