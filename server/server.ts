import express from "express";
import config from './config/index';
import loaders from './loaders/index';

async function startServer() {
  const app = express();
  await loaders(app);

  app.listen(config.port, () => {
    console.log(`Server ran on port ${config.port}`)
  }).on('error', err => {
    console.log(err);
  });
}

startServer();