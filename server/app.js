require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const flash = require('connect-flash');

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
app.use(cookieParser());

// Express View engine setup

app.use(
  require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true,
  }),
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

hbs.registerHelper('ifUndefined', (value, options) => {
  if (options.length < 2) { throw new Error('Handlebars Helper ifUndefined needs 1 parameter'); }
  if (typeof value !== 'undefined') {
    return options.inverse(this);
  }
  return options.fn(this);
});

// default value for title local
app.locals.title = 'Ironhack - Squad Converter';

app.use(flash());
require('./passport')(app);

const index = require('./routes/index');

app.use('/', index);

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = app;
