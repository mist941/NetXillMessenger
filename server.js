const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

mongoose.connect(
  "mongodb+srv://ivan_dev:rFPXg6f8HVS0rNce@netxildb.f7dhr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {useNewUrlParser: true}
)
  .then(() => console.log('DB connected...'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log("You are connected!");
});