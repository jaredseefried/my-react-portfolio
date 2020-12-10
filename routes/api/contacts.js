const router = require("express").Router();
const contactsController = require("../../controller/contactController");

router.route("/")
.get(contactsController.findAll)
.post(contactsController.create)

router.route('/portfolio')

module.exports = router