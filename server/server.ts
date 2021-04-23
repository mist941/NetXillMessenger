import express from 'express';
import config from './config/index';
import loaders from './loaders/index';


async function startServer() {
  const app = express();
  await loaders(app);
  app.listen(config.PORT, () => {
    console.log(`Server ran on port ${config.PORT}`)
  }).on('error', err => {
    console.log(err);
  });
}

startServer();
