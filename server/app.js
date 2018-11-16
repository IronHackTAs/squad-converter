require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

const whitelist = ['http://localhost:4200'];
const corsOptions = {
  origin(origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Express View engine setup

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// default value for title local
app.locals.title = 'Ironhack - Squad Converter';

const index = require('./routes/index');

app.use('/', index);

// app.get('*', (req, res) => {
//   res.sendFile(`${__dirname}/public/index.html`);
// });

module.exports = app;
