const functions = require("firebase-functions");
const express = require('express');
const router = express.Router();
const cors = require('cors');

const routes = require('./api/routes');

const app = express();
app.use(cors());
app.use('/api',routes);


exports.app = functions.https.onRequest(app);
