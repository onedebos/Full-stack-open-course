const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use(morgan("tiny"));

morgan.token("host", (request, response) => {
  console.log(request.hostname, JSON.stringify(response.body));
});

let phonebook = [
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

morgan(
  ":method :host :status :param[id] :res[content-length] - :response-time ms"
);

app.get("/info", (request, response) => {
  const totalPeople = phonebook.length;
  response.send(`<div><p>phonebook has info for ${totalPeople} people </p><div>
    <div><p> ${new Date()} </p></div>
    `);
  m(request, response);
});

app.get("/api/persons", (req, res) => {
  res.json(phonebook);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = phonebook.find(person => person.id === id);
  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  phonebook = phonebook.filter(person => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons/", (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "The name or number is missing."
    });
  }
  const isNameUnique = phonebook.find(person => person.name === body.name);
  if (isNameUnique) {
    return res.status(400).json({
      error: "names must be unique"
    });
  }
  console.log(isNameUnique);
  const person = {
    name: body.name,
    id: Math.floor(Math.random() * 1000),
    number: body.number
  };
  console.log(body);
  phonebook = phonebook.concat(person);
  res.json(phonebook);
});

const port = 3001;
app.listen(port);
// app.use(morgan("dev"));
console.log(`app running on port ${port}`);
