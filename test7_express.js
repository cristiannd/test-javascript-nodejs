// Diseña una API utilizando express que permita a los usuarios
// crear, leer, modificar, actualizar y eliminar elementos de una lista.
// La lista tendrá objetos que tienen la siguiente forma:
// {
//     id: 1,
//     content: 'Item 1'
// }

import express from "express";

const app = express();
app.use(express.json());

let items = [
  {
    id: 1,
    content: "Item 1",
  },
  {
    id: 2,
    content: "Item 2",
  },
  {
    id: 3,
    content: "Item 3",
  },
  {
    id: 4,
    content: "Item 4",
  },
];

app.get("/items", (req, res) => {
  return res.json(items);
});

app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  const itemFound = items.find((e) => e.id === Number(id));
  return res.json(itemFound);
});

app.post("/items", (req, res) => {
  const { content } = req.body;

  const newItem = { id: items.length + 1, content };
  items.push(newItem);

  return res.json(newItem);
});

app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const newItem = { id: Number(id), content };

  items = items.filter((item) => item.id !== Number(id));
  items.push(newItem);

  res.json(newItem);
});

app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  items = items.filter((item) => item.id !== Number(id));

  return res.status(204).json();
});

app.listen(8080, () => console.log("Server ON"));
