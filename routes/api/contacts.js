const router = require("express").Router();
const contactsController = require("../../controller/contactController");

router.route("/")
  .get(contactsController.findAll)
  .post(contactsController.create)

module.exports = router