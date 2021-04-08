import {Router} from "express";
import main from "./routes/main.mjs";
import auth from "./routes/auth.mjs";

export default () => {
  const router = Router();
  main(router);
  auth(router);

  return router;
}