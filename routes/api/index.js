const router = require("express").Router();
const contactRoutes = require("./contacts");
const mailRoutes = require('./sendMail')

router.use("/contacts", contactRoutes);
router.use('/sendMail', mailRoutes)

module.exports = router;
