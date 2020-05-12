const express = require("express");
const app = express();
app.use(express.json());

let contacts = [
  {
    name: "Temi Otedola",
    number: "+234-1234-5678",
    id: 4
  },
  {
    name: "Doyinsola Aluko",
    number: "+233-111-202902",
    id: 5
  },
  {
    name: "Zlatan Ibile",
    number: "+1-111-11891-2",
    id: 6
  }
];

const isInputValid = (name, number) =>
  name.length === 0 || number.length === 0 ? false : true;

const userExists = name =>
  contacts.filter(contact => contact.name === name).length === 0 ? false : true;

app.get("/api/contacts", (request, response) => {
  console.log("getting contacts...");
  response.json(contacts);
});

app.get("/api/contacts/:id", (request, response) => {
  const id = Number(request.params.id);
  const contact = contacts.find(contact => contact.id === id);
  if (contact) {
    response.status(200).json(contacts.find(contact => contact.id === id));
  } else {
    response.status(404).end();
  }
});

app.delete("/api/contacts/:id", (request, response) => {
  const id = Number(request.params.id);
  const contact = contacts.find(contact => contact.id === id);
  if (contact) {
    response.json({ message: "contact has been removed" });
  } else {
    response.status(404).end();
  }
});

app.get("/info", (request, response) => {
  response.send(`<p>Phonebook has info for ${contacts.length} people </p>
  <p>${Date.now()} </p>
  `);
});

app.post("/api/contacts/", (request, response) => {
  const body = request.body;
  const { name, number } = body;

  if (userExists(name)) {
    response.status(400).json({ message: "user already exists" });
  } else {
    if (!isInputValid(name, number)) {
      response
        .status(400)
        .json({ message: "you have not entered a name or a number" });
    } else {
      const newContact = { name, number, id: Math.floor(Math.random() * 1000) };

      contacts = contacts.concat(newContact);
      response.json(newContact);
    }
  }
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
