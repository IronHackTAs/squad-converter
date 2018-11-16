require('dotenv').config();
const express = require('express');

const linkedinRoute = express.Router();
const axios = require('axios');
const Linkedin = require('node-linkedin')(
  process.env.CLIENT_ID,
  process.env.SECRET_KEY,
  process.env.callBack,
);

const scope = [
  'r_basicprofile',
  'r_emailaddress',
  'rw_company_admin',
  'w_share',
];

linkedinRoute.get('/oauth/linkedin', (req, res) => {
  const authUrl = Linkedin.auth.authorize(scope);
  res.status(200).json(authUrl);
});

linkedinRoute.get('/oauth/linkedin/callback', (req, res) => {
  Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, (
    err,
    results,
  ) => {
    if (err) res.status(500).json({ message: 'Error in login' });
    else {
      const linkedin = Linkedin.init(results.access_token);
      linkedin.people.me((error, $in) => {
        if (error) res.status(500).json(err);
        return res.status(200).json({
          $in,
          token: results.access_token,
        });
      });
    }
  });
});

linkedinRoute.post('/submit', (req, res) => {
  const config = {
    headers: {
      Authorization: `Bearer ${req.body.data.token}`,
      'Content-Type': 'application/json',
    },
  };

  const bodyParametersComment = {
    comment: `${req.body.data.header}\n${req.body.data.text} ${req.body.data.url}`,
    content: {
      title: 'Ironhack',
      'submitted-url': 'www.ironhack.com',
      'submitted-image-url': `${req.body.data.image}`,
    },
    visibility: {
      code: 'anyone',
    },
  };

  const bodyParametersProfile = {
    patch: {
      $set: {
        summary: {
          preferredLocale: {
            country: 'ES',
            language: 'en',
          },
          localized: {
            en_US: {
              rawText: `${req.body.data.header}\n${req.body.data.text} ${req.body.data.url}`,
            },
          },
        },
      },
    },
  };

  axios.post(
    req.body.data.isComment
      ? 'https://api.linkedin.com/v1/people/~/shares?format=json'
      : `https://api.linkedin.com/v2/people/id=${req.body.data.personId}`,
    req.body.data.isComment ? bodyParametersComment : bodyParametersProfile,
    config,
  ).then((response) => {
    res.status(200).json({ response });
  }).catch((err) => {
    res.status(500).json(err);
  });
});

module.exports = linkedinRoute;
