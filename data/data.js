
let pancardArray = [{
    id: 'PAN_A',
    value: '10,00,000',
    folioName: 'Pan_A'
}, {
    id: 'PAN_B',
    value: '20,00,000',
    folioName: 'Pan_B'
}, {
    id: 'PAN_C',
    value: '30,00,000',
    folioName: 'Pan_C'
}];

let fundSuggestions = [{
    id: 1,
    name: 'Equity'
}, {
    id: 2,
    name: 'Debt'
}, {
    id: 3,
    name: 'Hybrid'
}];

let funds = [{
    id: 1,
    type: 'debt',
    fundName: 'ABC Debt Overnight Fund',
    description: 'ABC Debt Overnight Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
},
{
    id: 2,
    type: 'debt',
    fundName: 'ABC Debt Liquid Fund',
    description: 'ABC Debt Liquid Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
},
{
    id: 3,
    type: 'debt',
    fundName: 'ABC Debt Savings Fund',
    description: 'ABC Debt Savings Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
},
{
    id: 1,
    type: 'equity',
    fundName: 'ABC Equity Overnight Fund',
    description: 'ABC Equity Overnight Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
},
{
    id: 2,
    type: 'equity',
    fundName: 'ABC Equity Liquid Fund',
    description: 'ABC Equity Liquid Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
},
{
    id: 3,
    type: 'equity',
    fundName: 'ABC Equity Savings Fund',
    description: 'ABC Equity Savings Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
},
{
    id: 1,
    type: 'hybrid',
    fundName: 'ABC Hybrid Overnight Fund',
    description: 'ABC Hybrid Overnight Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
},
{
    id: 2,
    type: 'hybrid',
    fundName: 'ABC Hybrid Liquid Fund',
    description: 'ABC Hybrid Liquid Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
},
{
    id: 3,
    type: 'hybrid',
    fundName: 'ABC Hybrid Savings Fund',
    description: 'ABC Hybrid Savings Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
}];


module.exports = { pancardArray: pancardArray, fundSuggestions: fundSuggestions, funds: funds };