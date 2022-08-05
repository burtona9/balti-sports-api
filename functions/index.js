const functions = require("firebase-functions");
const express = require('express');
const fixtures = require('./api/fixtures');
const app = express();

app.use('/api',fixtures);


exports.app = functions.https.onRequest(app);
