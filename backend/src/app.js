const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRouter = require('./routers/event');

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/events/', eventRouter);

module.exports = app;
