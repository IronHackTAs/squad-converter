require('dotenv').config();

const express = require('express');

const databaseRoute = express.Router();
const axios = require('axios');


const { dbUrl } = process.env;

databaseRoute.get('/', (req, res) => {
  axios.get(dbUrl)
    .then((response) => {
      res.status(200).json(response.data.courseEditions);
    });
});

databaseRoute.get('/:email', (req, res) => {
  const { email } = req.params;

  axios.get(`${dbUrl}/squads/student/${email}`)
    .then((response) => {
      res.status(200).json(response.data);
    });
});

module.exports = databaseRoute;
