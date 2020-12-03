const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolioContactForm"
);

const contactSeeds = [
  {
    firstName: "FirstNameSeed",
    lastName: "LastNameSeed",
    email: "seed@email.com",
    subject: "Subject Seed"
  }
];

db.Contact
  .remove({})
  .then(() => db.Contact.collection.insertMany(contactSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });