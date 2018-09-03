const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../models/User");

router.get("/:squad", (req, res) => {
  let squad = req.params.squad;
  User.find({ squad })
    .then(squad => res.json(200, squad))
    .catch(err => res.json(400, { mesasge: err }));
});

router.post("/insert", (req, res, next) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const squad = req.body.squad;

  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashName = bcrypt.hashSync(name, salt);
  const hashSurname = bcrypt.hashSync(surname, salt);


  User.findOne({ hashName }, "username", (err, user) => {

    const newUser = new User({
        username: hashName,
        surname: hashSurname,
        squad
      });

    if(!bcrypt.compareSync(name, user.username))res.json(401)

    newUser.save(err => {
      if (err) {
        res.json(400)
      } else {
        res.json(200)
      }
    });
  })
});

module.exports = router;
