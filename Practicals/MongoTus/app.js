const db = require("./index");
const express = require("express");
const mongodb = require('mongodb');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function getCollection(collection_name) {
  const database = await db();
  const collection = database.collection(collection_name);
  return collection;
}

app.get("/", async (req, res) => {
  try {
    const forms = await getCollection("forms");
    const users = await forms.find().toArray();
    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.post("/", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const forms = await getCollection("forms");
    const users = await forms.insertOne({ name, username, email, password });
    res.send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const forms = await getCollection("forms");
    const users = await forms.deleteOne({
      _id: new mongodb.ObjectId(id),
    });
    res.send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.put("/:id", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const forms = await getCollection("forms");
    const { id } = req.params;
    const users = await forms.updateOne(
      { id: id },
      {
        $set: {
          name,
          username,
          email,
          password,
        },
      }
    );
    res.send({ result: "update" });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3003, () => console.log("listening on port 3003"));
