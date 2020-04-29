const express = require("express");
const app = express();

const phonebook = [
  {
    name: "Arto Hellas",
    number: "040-123455",
    id: 1
  },

  {
    name: "Ada lovelace",
    number: "39-44-33329292",
    id: 4
  },

  {
    name: "Mary Poppendick",
    number: "39-23-6423122",
    id: 2
  },
  {
    name: "Dan abaramhaov",
    number: "12-22-1222222",
    id: 3
  }
];

app.get("/info", (request, response) => {
  const totalPeople = phonebook.length;
  response.send(`<div><p>phonebook has info for ${totalPeople} people </p><div>
    <div><p> ${new Date()} </p></div>
    `);
});

app.get("/api/persons", (req, res) => {
  console.log(phonebook);
  res.json(phonebook);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = phonebook.find(person => person.id === id);
  res.json(person);
});

const port = 3001;
app.listen(port);
console.log(`app running on port ${port}`);
