const express = require('express');
const app = express();
const port = 8080;

const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Suggestion } = require('dialogflow-fulfillment');

const { intentMap } = require('./intents/intent-map');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

app.get('/', (req, res) => {
    res.send('BotHandler is Online!')
});

app.post('/', express.json(), (request, response) => {
    const agent = new WebhookClient({ request: request, response: response });
    // console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    // console.log('Dialogflow Request body  from tunnel: ' + JSON.stringify(request.body));

    agent.handleRequest(intentMap);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});