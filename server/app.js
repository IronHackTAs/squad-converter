require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

mongoose.Promise = Promise;
mongoose
  .connect(
    'mongodb://localhost/server',
    { useMongoClient: true },
  )
  .then(() => {
    console.log('Connected to Mongo!');
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

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
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

hbs.registerHelper('ifUndefined', (value, options) => {
  if (options.length < 2) { throw new Error('Handlebars Helper ifUndefined needs 1 parameter'); }
  if (typeof value !== 'undefined') {
    return options.inverse(this);
  }
  return options.fn(this);
});

// default value for title local
app.locals.title = 'Ironhack - Squad Converter';

// Enable authentication using session + passport
app.use(
  session({
    secret: 'irongenerator',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  }),
);
app.use(flash());
require('./passport')(app);

const index = require('./routes/index');

app.use('/', index);

const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes);

module.exports = app;
