const router = require("express").Router();
const Contact = require("../models");

router.get("/contacts", (req, res) => {
  db.Contact.find({})
    .then(dbContacts => {
      res.json(dbContacts);
    })
    .catch(err => {
      res.json(err);
    });
});