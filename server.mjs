import express from 'express';
import config from './config/index.mjs';
import loaders from './loaders/index.mjs';
const app = express();

async function startServer() {
  await loaders(app);

  app.listen(config.port, () => {
    console.log("You are connected!");
  });
}

startServer();

/*mongoose.connect(
  "mongodb+srv://ivan_dev:rFPXg6f8HVS0rNce@netxildb.f7dhr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {useNewUrlParser: true}
)*/