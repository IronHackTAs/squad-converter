require('dotenv').config();

const express = require('express');

const databaseRoute = express.Router();
const axios = require('axios');
const _ = require('lodash');

const { dbUrl } = process.env;

databaseRoute.get('/', (req, res) => {
  axios.get(dbUrl).then((response) => {
    res.status(200).json(response.data.courseEditions);
  });
});

databaseRoute.get('/student/:email', (req, res) => {
  const { email } = req.params;

  axios
    .get(`${dbUrl}/squads/student/${email}`)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(err => res.status(500).json(err));
});

databaseRoute.get('/cohorts', (req, res) => {
  axios
    .get(`${dbUrl}/squads/cohorts`)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(err => res.status(500).json(err));
});

databaseRoute.get('/campus', (req, res) => {
  axios
    .get(`${dbUrl}/campus`)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(err => res.status(500).json(err));
});

databaseRoute.get('/course', (req, res) => {
  axios
    .get(`${dbUrl}/course`)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(err => res.status(500).json(err));
});

databaseRoute.get('/cohorts/:id', (req, res) => {
  axios
    .get(dbUrl)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(err => res.status(500).json(err));
});

databaseRoute.get('/squads/cohorts/:squadNumber', (req, res) => {
  axios
    .get(`${dbUrl}/squads/cohorts`)
    .then(response => _.find(response.data, ['squad', `${req.params.squadNumber}`]))
    .then((cohorts) => {
      const { id } = cohorts;
      axios.get(`${dbUrl}/squads/cohorts/${id}`)
        .then((response) => {
          const { squad, completedStudents, totalStudents } = response.data;
          if (!squad || completedStudents === undefined || !totalStudents) {
            res.status(500).json({ err: 'Error fail squad, completedStudest or totolStudents' });
          } else {
            res.status(200).json({ squad, completedStudents, totalStudents });
          }
        })
        .catch(err => res.status(500).json(err));
    });
});

databaseRoute.post('/checked-by-student', (req, res) => {
  const { email, squadNumber } = req.body;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .get(`${dbUrl}/squads/cohorts`)
    .then(response => _.find(response.data, ['squad', `${squadNumber}`]))
    .then((cohorts) => {
      const { id } = cohorts;

      const bodyParameters = {
        email,
        cohort_id: id,
      };

      axios
        .post(`${dbUrl}/squads/checked-by-student`, bodyParameters, config)
        .then((response) => {
          res.status(200).json(response.data);
        })
        .catch(err => res.status(500).json(err));
    })
    .catch(err => res.status(500).json(err));
});

module.exports = databaseRoute;
