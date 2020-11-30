const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Contact = require("../model/contact-form");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolioContactForm", options) });

app.post("/submit", ({ body }, res) => {
  Contact.create(body)
    .then(contactUser => {
      res.json(contactUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
