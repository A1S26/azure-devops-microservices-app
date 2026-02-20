const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/devopsdb');

const ItemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model('Item', ItemSchema);

app.get('/', (req, res) => {
  res.send("Backend Running Successfully");
});

app.post('/add', async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.send("Item Added");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
