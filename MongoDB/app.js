const express = require("express");
const db = require("./connection");
const postModel = require("./postModel");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    const newPost = await postModel.create({ name, username, email, password });
    res.json(newPost);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/", async (req, res) => {
  try {
    const newPost = await postModel.find();
    res.json(newPost);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const newPost = await postModel.findById(id);
    res.json(newPost);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const newPost = await postModel.findByIdAndUpdate(id, req.body);
    res.json(newPost);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const newPost = await postModel.findByIdAndDelete(id);
    res.json(newPost);
  } catch (error) {
    res.status(400).send(error);
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening to port ${port}`));
