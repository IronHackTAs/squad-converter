require('dotenv').config();

const express = require('express');
const axios = require('axios');

const database = express.Router();
const { dbUrl } = process.env;

database.get('/', (req, res) => {
  axios.get(dbUrl)
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(err => console.log(err));
});

module.exports = database;
