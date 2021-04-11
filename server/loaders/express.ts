import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import config from '../config';
import routes from '../api';
import express, {Application} from "express";

export default (app: Application) => {
  const __dirname = path.resolve();
  app.use(cors());
  app.use(express.static(path.join(__dirname, 'build')));
  app.use(bodyParser.json());
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
  });

  app.use(config.api.prefix, routes());
}