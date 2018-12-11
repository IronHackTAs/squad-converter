require('dotenv').config();
const index = require('./routes/index');

const bodyParser = require('body-parser');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

const whitelist = [
  'http://localhost:3000',
  'http://localhost:4200',
  'https://squads.ironhack.com',
];
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

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.locals.title = 'Ironhack - Squad Converter';

app.use('/', index);

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = app;
