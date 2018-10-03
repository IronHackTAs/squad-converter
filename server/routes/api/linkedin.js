require("dotenv").config();
const express = require("express");
const linkedinRoute = express.Router();
const axios = require('axios');
const querystring = require('querystring');
const Linkedin = require("node-linkedin")(
  process.env.CLIENT_ID,
  process.env.SECRET_KEY,
  process.env.callBack
);

const scope = [
  "r_basicprofile",
  "r_emailaddress",
  "rw_company_admin",
  "w_share",
];

linkedinRoute.get("/oauth/linkedin", (req, res) => {
  // set the callback url
  var auth_url = Linkedin.auth.authorize(scope);
  res.status(200).json(auth_url);
});

linkedinRoute.get("/oauth/linkedin/callback", (req, res) => {
  Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function (
    err,
    results
  ) {
    if (err) return console.error(err);
    const linkedin = Linkedin.init(results.access_token);
    linkedin.people.me(function (err, $in) {
      if (err) console.error(err);
      return res.status(200).json({
        $in,
        token: results.access_token
      });
    });
  });
});

linkedinRoute.post("/submit", (req, res) => {

  var config = {
    headers: {
      'Authorization': "Bearer " + req.body.data.token,
      'Content-Type': 'application/json'
    }
  };

  var bodyParameters = {
      "comment": "Check out developer.linkedin.com! http://linkd.in/1FC2PyG",
      "visibility": {
        "code": "anyone"
    }
  }

  axios.post(
    'https://api.linkedin.com/v1/people/~/shares?format=json',
    bodyParameters,
    config
  ).then((response) => {
    res.status(200).json({response});
  }).catch((error) => {
    console.log(error);
  });
})

module.exports = linkedinRoute;