
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
    type: 1,
    fundName: 'ABC Overnight Fund',
    description: 'ABC Overnight Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
},
{
    id: 2,
    type: 1,
    fundName: 'ABC Liquid Fund',
    description: 'ABC Liquid Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
},
{
    id: 3,
    type: 1,
    fundName: 'ABC Savings Fund',
    description: 'ABC Savings Fund Details: \n The investment objective of the scheme is to provide returns that closely correspond to the total returns of the securtities as represented by the underlying index, subject to tracking error. \n More details : https://external_link '
}];


module.exports = { pancardArray: pancardArray, fundSuggestions: fundSuggestions, funds: funds };