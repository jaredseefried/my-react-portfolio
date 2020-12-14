const router = require("express").Router();
const contactRoutes = require("./contacts");
const mailRoutes = require('./sendMail')

// Book routes
router.use("/contacts", contactRoutes);
router.use('/sendMail', mailRoutes)

module.exports = router;
