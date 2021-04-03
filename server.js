const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

mongoose.connect(
  "mongodb+srv://ivan_dev:rFPXg6f8HVS0rNce@netxildb.f7dhr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {useNewUrlParser: true}
)
  .then(() => console.log('DB connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('NetXil Messenger API');
});

app.listen(PORT, () => {
  console.log("You are connected!");
});