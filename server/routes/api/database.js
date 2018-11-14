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

databaseRoute.get('/student/:email', (req, res) => {
  const { email } = req.params;

  axios.get(`${dbUrl}/squads/student/${email}`)
    .then((response) => {
      res.status(200).json(response.data);
    });
});

databaseRoute.get('/cohorts', (req, res) => {
  axios.get(`${dbUrl}/cohorts`)
    .then((response) => {
      res.status(200).json(response.data);
    });
});

databaseRoute.get('/campus', (req, res) => {
  axios.get(`${dbUrl}/campus`)
    .then((response) => {
      res.status(200).json(response.data);
    });
});

databaseRoute.get('/course', (req, res) => {
  axios.get(`${dbUrl}/course`)
    .then((response) => {
      res.status(200).json(response.data);
    });
});

databaseRoute.get('/cohorts/:id', (req, res) => {
  axios.get(dbUrl)
    .then((response) => {
      res.status(200).json(response.data);
    });
});

module.exports = databaseRoute;
