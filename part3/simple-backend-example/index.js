const { request, response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

let persons = [
  { id: 1, name: "bob" },
  { id: 2, name: "siri" },
  { id: 3, name: "taylor" },
  { id: 5, name: "swift" },
];

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
  return maxId + 1;
};

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.sendStatus(404);
  }
});

app.delete("/api/persons/:id", (req, res) => {
  console.log("Received delete request");
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);
  if (person) {
    persons = persons.filter((p) => p.id !== id);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.post("/api/persons", (req, res) => {
  const id = generateId();
  let person = req.body;
  if (!person) {
    return res.sendStatus(400);
  } else {
    const personToAdd = { id: id, name: person.name };
    persons = persons.concat(personToAdd);
    console.log(personToAdd);
    res.status(200).json(personToAdd);
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
