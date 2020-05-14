const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const mongoose = require("mongoose");
const Contact = require("./model/Contact");
mongoose.connect(process.env.DB_LINK, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(cors());

const isInputValid = (name, number) =>
  name.length === 0 || number.length === 0 ? false : true;

app.get("/api/contacts", (request, response) => {
  Contact.find({})
    .then(contact => {
      console.log("getting contacts...");
      const contacts = contact.map(contact => contact);
      response.json(contacts).end();
    })
    .catch(err => {
      console.log("something went wrong");
      response.json(err).end();
    });
});

app.get("/api/contacts/:id", (request, response, next) => {
  const id = request.params.id;
  Contact.findById(id)
    .then(contact => {
      if (contact) {
        response.json(contact).end();
      } else {
        response.status(404).end();
      }
    })
    .catch(() => {
      response
        .status(400)
        .json({ error: "There was a problem finding a user with that ID" });
    });
});

app.delete("/api/contacts/:id", (request, response) => {
  const id = request.params.id;
  Contact.findByIdAndDelete(id)
    .then(() =>
      response.status(204).json({ message: "contact has been removed" })
    )
    .catch(() => response.status(404).end());
});

app.get("/info", (request, response) => {
  Contact.find({})
    .then(contact => {
      const contacts = contact.map(contact => contact);
      response.send(`<p>Phonebook has info for ${contacts.length} people </p>
  <p>${Date.now()} </p>
  `);
    })
    .catch(err => {
      console.log("something went wrong");
      response.json(err).end();
    });
});

app.put("/api/contacts/:id", (request, response) => {
  const id = request.params.id;

  const { name, number } = request.body;
  const contact = {
    name,
    number
  };
  Contact.findByIdAndUpdate(id, contact, { useFindAndModify: false })
    .then(() => {
      response
        .status(200)
        .json(contact)
        .end();
    })
    .catch(err => {
      console.log(err);
      response
        .status(400)
        .json({ error: "There was a problem updating that contact." });
    });
});

app.post("/api/contacts/", (request, response) => {
  const body = request.body;
  const { name, number } = body;

  const contact = new Contact({ name, number });
  contact
    .save()
    .then(savedContact => {
      response.json(savedContact.toJSON());
    })
    .catch(err => response.json({ error: "Something went wrong." }));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
