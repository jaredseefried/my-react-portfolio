const router = require("express").Router();
const contactsController = require("../../controller/contactController");
const nodemailer = require('nodemailer')

router.route("/")
  .get(contactsController.findAll)
  .post(contactsController.create)
  .post()

module.exports = router