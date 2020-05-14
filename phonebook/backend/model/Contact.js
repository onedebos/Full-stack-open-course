const mongoose = require("mongoose");
require("dotenv/config");

const PhonebookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model("Contact", PhonebookSchema);

module.exports = Contact;
